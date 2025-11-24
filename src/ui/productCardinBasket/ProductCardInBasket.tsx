import { memo, useEffect, useState, useRef, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import type { FC } from 'react';
import styles from './ProductCardInBasket.module.css';
import type { IProduct } from './type';
import { useAppDispatch } from '../../services/hooks';
import { addAndDeleteToFavoriteItems } from '../../services/slices/userUIData';
import Delete from '../assets/delete.svg?react';
/*`../assets/${props.image}`*/ 


const ProductCardInBasket: FC<IProduct> = ({id, image, price, shortDescription}) => {
   



    return (
        
            <div className={`${styles.container}`} id={id} data-cy={`productCard-${id}`}>
                <img className={styles.image} src={image}></img>
                <div className={styles.info}>
                    <p className={styles.price}>{`${price}₽`}</p>
                    <p className={styles.description}>{shortDescription}</p>
                    <Delete className={styles.delete}/>
                </div>
                
               
    
                    

                

            </div>
            
            
            
   
    );
};

export default ProductCardInBasket;
