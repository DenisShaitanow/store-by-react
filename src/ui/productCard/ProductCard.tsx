import { memo, useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import type { FC } from 'react';
import styles from './ProductCard.module.css';
import type { IProduct } from './type';
/*`../assets/${props.image}`*/ 


export const ProductCard: FC<IProduct> = (props: IProduct) => {
    const [like, setLike] = useState<boolean>(false);
    const heartlike = useRef<HTMLSpanElement>(null);
    const navigate = useNavigate();

    function handleClick(evt: React.MouseEvent<HTMLDivElement>) {
        if (heartlike) {
            if (evt.target !== heartlike.current) {
                navigate(`/${props.id}`);
            }
        }
    }

    function handleLike() {
        setLike(!like);
    }

    return (
        
            <div onClick={handleClick} className={`${styles.container} ${props.className}`} id={props.id} data-cy={`productCard-${props.id}`}>
                <img className={styles.image} src={props.image}></img>
                <p className={styles.price}>{`${props.price}₽`}</p>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.description}>{props.shortDescription}</p>
                <span ref={heartlike} onClick={handleLike}  className={`${styles.like} ${like ? styles['like-done'] : ''}`}></span>
    
                    

                

            </div>
            
            
            
   
    );
};
