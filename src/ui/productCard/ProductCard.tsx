import { memo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import type { FC } from 'react';
import styles from './ProductCard.module.css';
import type { IProduct } from './type';



export const ModalUI: FC<IProduct> = (props: IProduct) => {
    

    return (
        
            <div className={styles.container} id={props.id} data-cy={`productCard-${props.id}`}>
                <image className={styles.image} src={}></image>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.description}>{props.shortDescription}</p>
                <p className={styles.category}>{props.category}</p>

            </div>
            
        
   
    );
};
