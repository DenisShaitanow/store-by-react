import { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import type { FC } from 'react';
import styles from './ProductCard.module.css';
import type { IProduct } from './type';
/*`../assets/${props.image}`*/ 


export const ProductCard: FC<IProduct> = (props: IProduct) => {
    const [like, setLike] = useState<boolean>(false);

    return (
        
            <div className={styles.container} id={props.id} data-cy={`productCard-${props.id}`}>
                <img className={styles.image} src={props.image}></img>
                <p className={styles.price}>{`${props.price}₽`}</p>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.description}>{props.shortDescription}</p>
                <p className={styles.category}>{props.category}</p>
                <span onClick={() => {setLike(!like)}}  className={`${styles.like} ${like ? styles['like-done'] : ''}`}></span>
    
                    

                

            </div>
            
            
            
   
    );
};
