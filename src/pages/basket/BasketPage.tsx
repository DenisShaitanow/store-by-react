import styles from './BasketPage.module.css';
import { useEffect, useState, type FC } from 'react';
import {   useParams } from 'react-router-dom';
import { ButtonUI } from '../../ui/button';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { type IProduct } from '../../types';
import { selectBasket } from '../../services/selectors/userUIData-selectors/userUIData-selectors';
import { Link } from 'react-router-dom';
import { addToBusket, removeFromBusket } from '../../services/slices/userUIData';
import ProductCardInBasket from '../../ui/productCardinBasket/ProductCardInBasket';




const BasketPage: FC = () => {

    const dispatch = useAppDispatch();
    const productsInBasket = useAppSelector(selectBasket);
    
         
         return (
            <div className={styles.container}>
                {productsInBasket.map(card => (
                    <ProductCardInBasket key={card.id} {...card}/>
                ))}
                <ButtonUI label='Перейти к оформлению'></ButtonUI>

            </div>
        )
    
    
   
};

export default BasketPage;
