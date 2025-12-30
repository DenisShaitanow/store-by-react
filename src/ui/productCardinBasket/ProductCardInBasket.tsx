import { memo, useEffect, useState, useRef, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import type { FC } from 'react';
import styles from './ProductCardInBasket.module.css';
import type { IProduct } from './type';
import { useAppDispatch } from '../../services/hooks';
import { removeFromBusket } from '../../services/slices/userUIData';
import Delete from '../assets/delete.svg?react';
/*`../assets/${props.image}`*/ 


const ProductCardInBasket: FC<IProduct> = (card) => {
   
const dispatch = useAppDispatch();

const handleDelete = () => {
    dispatch(removeFromBusket(card))
}

    return (
        
            <div className={`${styles.container}`} id={card.id} data-cy={`productCard-${card.id}`}>
                <img className={styles.image} src={card.image}></img>
                <div className={styles.info}>
                    <p className={styles.price}>{`${card.price}₽`}</p>
                    <p className={styles.description}>{card.shortDescription}</p>
                    <Delete data-cy={'buttonDeleteProductFromBasket'} className={styles.delete} onClick={handleDelete}/>
                </div>
                
               
    
                    

                

            </div>
            
            
            
   
    );
};

export default ProductCardInBasket;
