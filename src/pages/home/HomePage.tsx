import styles from './HomePage.module.css';
import { useState, useEffect, type ChangeEvent, useMemo, useRef, useLayoutEffect } from 'react';
import { products as productsMock } from '../../constants/constants';
import type { FC } from 'react';
import { ProductCard } from '../../ui/productCard';
import type { IProduct } from '../../ui/productCard/type';
import { CheckboxGroupUI } from '../../ui/checkbox';
import { CheckboxDropdown } from '../../ui/checkboxDropdown';
import { SpinnerPulse } from '../../ui/spinnerPulse';

const calculateVisibleProductsCount = (width: number) => {
    const cardsPerRow = Math.floor(width / 240); 
    return cardsPerRow * 3;
};

const categoryMapping: string[] = [
    't-shirts',
    'shoes',
    'jackets',
    'underwear',
    'hats',
    'trousers',
    'accessories'
];

const sexMapping: Record<string, string> = {
    'Для мужчин': 'man',
    'Для женщин': 'woman'
}

const HomePage: FC = () => {

    const productsContainer = useRef<HTMLDivElement>(null);
    const productsContainerWidth = productsContainer.current?.clientWidth;
    const [productsToShow, setProductsToShow] = useState<IProduct[]>([]);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [selectedSex, setSelectedSex] = useState<string[]>([]);
    const [selectedSexData, setSelectedSexData] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories ] = useState<(string | number)[]>([]);
    const [selectedCategoriesData, setSelectedCategoriesData ] = useState<string[]>([]);
    
    const products: IProduct[] = productsMock;

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
          // Проверяем выбор категории
          if (selectedCategoriesData.length > 0 && !selectedCategoriesData.includes(product.category)) {
            return false;
          }
          // Проверяем выбор пола
          if (selectedSexData.length > 0 && !selectedSexData.includes(product.sex)) {
            return false;
          }
          return true;
        });
      }, [selectedCategoriesData, selectedSexData]);

    useLayoutEffect(() => {
        if (productsContainer.current) {
            const containerWidth = productsContainer.current.clientWidth;
            const visibleCardsCount = calculateVisibleProductsCount(containerWidth);
            setProductsToShow(filteredProducts.slice(0, visibleCardsCount));
        }
    }, [filteredProducts, productsContainer]);
    
    useEffect(() => {
        function handleResize() {
            if (productsContainer.current) {
                const currentWidth = productsContainer.current.clientWidth;
                const newVisibleCount = calculateVisibleProductsCount(currentWidth);
                setProductsToShow(filteredProducts.slice(0, newVisibleCount));
            }
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        function handleScroll() {
            const bottomReached =
                document.documentElement.scrollTop +
                window.innerHeight >=
                document.documentElement.offsetHeight - 20;
            
            if (bottomReached && !isLoadingMore && productsToShow.length < products.length) {
                setIsLoadingMore(true);
                
                // Подгрузка следующей порции товаров
                const nextBatchSize = calculateVisibleProductsCount(productsContainerWidth!); // Размер нового шага загрузки
                const startIndex = productsToShow.length;
                const endIndex = Math.min(startIndex + nextBatchSize, products.length);
                setTimeout(() => {
                    setProductsToShow((prev) => [...prev, ...filteredProducts.slice(startIndex, endIndex)]);
                    setIsLoadingMore(false);
                }, 1000); // задержка для эффекта плавной загрузки
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [products, isLoadingMore, productsToShow]);


    //  обработка инпута пола пользователя, получение данных соответствующих по типу карточке товара
    const handleSex = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedItem: string = e.target.id;
        const selectedItemData: string = sexMapping[selectedItem];
        if (selectedSex.includes(selectedItem)) {
            setSelectedSex(prevSelectedItems =>
                [...prevSelectedItems].filter(
                    item => item !== selectedItem
                )
            );
            setSelectedSexData(prevSelectedSexData => [...prevSelectedSexData].filter(
                item => item !== selectedItemData
            ))
        } else {
            setSelectedSex(prevSelectedItems => [
                ...prevSelectedItems,
                selectedItem
            ]);
            setSelectedSexData(prevSelectedSexData => [...prevSelectedSexData, selectedItemData]
            )
        }
    }

    // обработка инпута категории товаров, получение данных соответствующих по типу карточке товара
    const handlecategories = (selectedValues: (string | number)[]) => {
        setSelectedCategories(selectedValues);
        setSelectedCategoriesData(selectedValues.map(item => categoryMapping[item as number]));
    }
    

    return (
        <div className={styles.main}>
            <div className={styles.rowContainer}>
                <div className={styles.containerFixed}>
                    <div className={styles.filters}>
                        <div>
                            <CheckboxGroupUI title='Пол' selectedItems={selectedSex} fieldNames={['Для женщин','Для мужчин']} onChange={handleSex}/>
                        </div>
                        <div>
                            <CheckboxDropdown selectedValues={selectedCategories} onChange={handlecategories} title='Категория' staticMode options={['Рубашки','Обувь','Верхняя одежда','Нижнее белье','Головные уборы','Брюки', 'Аксессуары']}/>
                        </div>
                    </div>
                </div>
                <span className={styles.greyLine}></span>
                <div className={styles.products} ref={productsContainer}>
                        {productsToShow.map((product) => (
                            <ProductCard
                                className={styles.product}
                                key={product.id}
                                title={product.title}
                                description={product.description}
                                shortDescription={product.shortDescription}
                                price={product.price}
                                id={product.id}
                                image={product.image}
                                category={product.category}
                                sex={product.sex}
                            />
                        ))}
                </div>
            </div>
            {isLoadingMore && 
                <div className={styles.spinnerContainer}>
                    <SpinnerPulse className={styles.spinner}/>
                </div>
            }
        </div>
    );
};

export default HomePage;
