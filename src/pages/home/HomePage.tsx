import styles from './HomePage.module.css';
import { useState, useEffect } from 'react';
import { products as productsMock } from '../../constants/constants';
import type { FC } from 'react';
import { ProductCard } from '../../ui/productCard';
import type { IProduct } from '../../ui/productCard/type';

const calculateVisibleProductsCount = () => {
    const cardsPerRow = Math.floor(window.innerWidth / 160); // ширина одной карточки ~140px
    console.log(cardsPerRow);
    return cardsPerRow * 4;
};

export const HomePage: FC = () => {
    const [productsToShow, setProductsToShow] = useState<IProduct[]>([]);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    
    const products: IProduct[] = productsMock;

    useEffect(() => {
        // Устанавливаем начальное количество отображаемых продуктов
        const initialVisibleCount = calculateVisibleProductsCount();
        console.log(initialVisibleCount);
        setProductsToShow(products.slice(0, initialVisibleCount));
    }, []);

    useEffect(() => {
        function handleResize() {
            // Если окно изменилось в размерах, пересчитываем видимую область и подгружаем нужное количество продуктов
            const newVisibleCount = calculateVisibleProductsCount();
            if (!isLoadingMore) {
                setProductsToShow(products.slice(0, newVisibleCount));
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [products]);

    useEffect(() => {
        function handleScroll() {
            const bottomReached =
                document.documentElement.scrollTop +
                window.innerHeight >=
                document.documentElement.offsetHeight - 200;
            
            if (bottomReached && !isLoadingMore && productsToShow.length < products.length) {
                setIsLoadingMore(true);
                
                // Подгрузка следующей порции товаров
                const nextBatchSize = calculateVisibleProductsCount(); // Размер нового шага загрузки
                const startIndex = productsToShow.length;
                const endIndex = Math.min(startIndex + nextBatchSize, products.length);
                setTimeout(() => {
                    setProductsToShow((prev) => [...prev, ...products.slice(startIndex, endIndex)]);
                    setIsLoadingMore(false);
                }, 500); // задержка для эффекта плавной загрузки
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [products, isLoadingMore, productsToShow]);

    return (
        <main className={styles.main}>
            {productsToShow.map((product) => (
                <ProductCard
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
        </main>
    );
};
