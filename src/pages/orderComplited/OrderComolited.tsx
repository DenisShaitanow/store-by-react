import styles from './OrderComolited.module.css';
import { useEffect, useLayoutEffect, useState, type ChangeEvent, type FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { useNavigate } from 'react-router-dom';
import { selectOrders } from '../../services/selectors/userUIData-selectors/userUIData-selectors';
import { ButtonUI } from '../../ui/button';



const OrderComplited: FC = () => { 

    const navigate = useNavigate();
    const select = useAppSelector;

    const orders: string[] = select(selectOrders);
    const orderId = orders[orders.length-1];

    const handleOk = () => {
        navigate('/');
    }

    return (
        <div className={styles.container}>
            <span className={styles.text}>Ваш заказ успешно создан и поступил в обработку, его номер {orderId}.</span>
            <ButtonUI className={styles.buttonOk} onClick={handleOk} label='Отлично'></ButtonUI>
        </div>
    )
}

export default OrderComplited;  