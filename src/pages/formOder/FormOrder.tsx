 import styles from './FormOder.module.css';
import { useEffect, useState, type ChangeEvent, type FC } from 'react';
import { InputUI } from '../../ui/input';
import { InputDropDown } from '../../ui/inputDropDown/imputDropDownSimple';


const FormOderPage: FC = () => { 

    const [selectСourier, setSelectCourier] = useState<boolean>(true);
    const [adress, SetAdress] = useState<string>('');
    const [adressPoint, SetAdressPoint] = useState<string>('');
    const [formPaySelf, setFormPay] = useState<boolean>(false);

    const handleChangeAdress = (e: ChangeEvent<HTMLInputElement>) => {
        SetAdress(e.target.value)
    }

    const handleChangePoint = (e: ChangeEvent<HTMLInputElement>) => {
        SetAdressPoint(e.target.value);
    }

    return (
        <div className={styles.container}>
            <span className={styles.selectPay}>Выберете способ получения</span>
            <div className={styles.twoButtons}>
                <div className={`${styles.selectPayButton} ${!selectСourier ? styles.select : '' }`} onClick={() => setSelectCourier(false)}>Самовывоз</div>
                <div className={`${styles.selectPayButton} ${selectСourier ? styles.select : '' }`} onClick={() => setSelectCourier(true)}>Курьер</div>
            </div>
            { selectСourier && (
                <InputUI name='adress' type='text' title='Адрес' value={adress} onChange={handleChangeAdress} placeholder='Введите адрес'/>
            )}
            { !selectСourier && (
                <InputDropDown className={styles.pointTake} id='1' title='Пункт выдачи' withInput={false} value={adressPoint} onChangeOption={handleChangePoint} placeholder='Выберите удобный пункт выдачи' options={[{value: 'ул.Мичурина, д.23', label: 'ул.Мичурина, д.23'}, {value: 'пр-т Королева, д.26', label: 'пр-т Королева, д.26'}, {value: 'пл. Ленина, д.17', label: 'пл. Ленина, д.17'}, {value: 'ул. Кирова, д.17', label: 'ул. Кирова, д.17'}, {value: 'ул. Сахарова, д.1', label: 'ул. Сахарова, д.1'}]}/>
            )}

            <span className={styles.selectPay}>Выберете способ оплаты</span>
            <div className={styles.twoButtons}>
                <div className={`${styles.selectPayButton} ${!formPaySelf ? styles.select : '' }`} onClick={() => setFormPay(false)}>Оплата при получении</div>
                <div className={`${styles.selectPayButton} ${formPaySelf ? styles.select : '' }`} onClick={() => setFormPay(true)}>Оплата картой онлайн</div>
            </div>
        
        </div>
    )
}

export default FormOderPage;  