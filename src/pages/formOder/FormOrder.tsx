 import styles from './FormOder.module.css';
import { useEffect, useState, type ChangeEvent, type FC } from 'react';
import { InputUI } from '../../ui/input';
import { InputDropDown } from '../../ui/inputDropDown/imputDropDownSimple';
import { ButtonUI } from '../../ui/button';

const formatCardNumber = (inputValue: string) => {
    // Удаляем любые существующие пробелы из строки
    let cleanValue = inputValue.replace(/\s/g, '').substring(0, 16);
    
    // Добавляем пробелы после каждых четырёх символов
    let formattedValue = '';
    for (let i = 0; i < cleanValue.length; i += 4) {
        if (i > 0) {
            formattedValue += ' ';
        }
        formattedValue += cleanValue.substring(i, Math.min(cleanValue.length, i + 4));
    }
    return formattedValue;
};


const FormOderPage: FC = () => { 

    const [formData, setFormData] = useState({
        selectСourier: true,
        adress: '',
        adressPoint: '',
        formPaySelf: true,
        numberCard: '',
        PersonCard: '',
        CVV: ''
    })

    const [selectСourier, setSelectCourier] = useState<boolean>(true);
    const [adress, setAdress] = useState<string>('');
    const [adressPoint, setAdressPoint] = useState<string>('');
    const [formPaySelf, setFormPay] = useState<boolean>(true);
    const [numberCard, setNumber] = useState<string>('');
    const [PersonCard, setPerson] = useState<string>('');
    const [CVV, setCVV] = useState<string>('');
    const [buttonBuy, setButtonBuy] = useState<boolean>(true);

    const handleChangeNumberCard = (e: ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const cleanedAndFormattedValue = formatCardNumber(rawValue); // Форматируем значение
        setNumber(cleanedAndFormattedValue); // Устанавливаем новое состояние
       
    }

    const handleChangePersonCard = (e: ChangeEvent<HTMLInputElement>) => {
        setPerson(e.target.value);
        setFormData(prev => ({...prev, PersonCard: e.target.value as string}));
        localStorage.setItem('orderForm', JSON.stringify(formData))
    }

    const handleChangeCVV = (e: ChangeEvent<HTMLInputElement>) => {
        setCVV(e.target.value);
    }

    const handleChangeAdress = (e: ChangeEvent<HTMLInputElement>) => {
        setAdress(e.target.value)
    }

    const handleChangePoint = (e: ChangeEvent<HTMLInputElement>) => {
        setAdressPoint(e.target.value);
    }

    useEffect(() => {
        // Проверяем общую доступность формы
        const isValidAddressSelection =
            (selectСourier && adress.trim()) ||       
            (!selectСourier && adressPoint.trim()); 
    
        const isPaymentDataComplete =
            formPaySelf ||
            (!formPaySelf &&
                numberCard.trim() !== "" &&
                PersonCard.trim() !== "" &&
                CVV.trim() !== "");
    
        // Блокировка кнопки, если данные заполнены некорректно
        setButtonBuy(!(isValidAddressSelection && isPaymentDataComplete));
    }, [
        selectСourier,
        adress,
        adressPoint,
        formPaySelf,
        numberCard,
        PersonCard,
        CVV
    ]);

    const handleBuy = () => {
        // dodelat
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
                <div className={`${styles.selectPayButton} ${formPaySelf ? styles.select : '' }`} onClick={() => setFormPay(true)}>Оплата при получении</div>
                <div className={`${styles.selectPayButton} ${!formPaySelf ? styles.select : '' }`} onClick={() => setFormPay(false)}>Оплата картой онлайн</div>
            </div>
            { !formPaySelf && (
                <>
                <span className={styles.infoCard}>Введите данные карты</span>
                <div className={styles.cardInputs}>
                    <InputUI  name='numberCard' type='text' title='Номер карты' value={numberCard} onChange={handleChangeNumberCard} placeholder='Введите номер карты'/>
                    <InputUI halfSize name='cvvCard' type='text' title='CVV' value={CVV} onChange={handleChangeCVV} placeholder='Введите код с обратной стороны'/>
                    <InputUI name='personCard' type='text' title='Владелец карты' value={PersonCard} onChange={handleChangePersonCard} placeholder='Введите имя владельца'/>
                    
                </div>
                </>
            )}
             
             <ButtonUI className={styles.buttonBuy} label='Совершить покупку' disabled={buttonBuy} onClick={handleBuy}/>
            
        
        </div>
    )
}

export default FormOderPage;  