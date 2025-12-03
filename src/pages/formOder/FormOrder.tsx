import styles from './FormOder.module.css';
import { useEffect, useLayoutEffect, useState, type ChangeEvent, type FC } from 'react';
import { type IFormOrderData } from '../../types/index';
import { InputUI } from '../../ui/input';
import { InputDropDown } from '../../ui/inputDropDown/imputDropDownSimple';
import { ButtonUI } from '../../ui/button';
import { doOrder } from '../../services/thunks/userUIData/userUIData-thunks';
import { useAppDispatch } from '../..//services/hooks';
import { useNavigate } from 'react-router-dom';

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

const validateNumberCard = (value: string) => /^\d+$/.test(value.replace(/\s/g, ''));
const validatePersonCard = (value: string) => /^[A-Za-z\s]+$/.test(value);
const validateCVV = (value: string) => /^\d{3}$/.test(value);


const FormOderPage: FC = () => { 

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const storedFormDataString = JSON.parse(localStorage.getItem('orderForm') ?? '');
    const initialFormData: IFormOrderData = storedFormDataString ? storedFormDataString : {
        selectСourier: true,
        adress: '',
        adressPoint: '',
        formPaySelf: true,
        numberCard: '',
        PersonCard: '',
        CVV: ''
    };

    const [formData, setFormData] = useState<IFormOrderData>(initialFormData);

    const [errors, setErrors] = useState({
        numberCardError: "",
        personCardError: "",
        cvvError: ""
    });


    const [buttonBuyDisabled, setButtonBuyDisabled] = useState<boolean>(true);

    const handleChangeNumberCard = (e: ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const cleanedAndFormattedValue = formatCardNumber(rawValue); 
        const valid = validateNumberCard(cleanedAndFormattedValue);
        setErrors((prev) => ({
            ...prev,
            numberCardError: valid ? "" : "Некорректный номер карты",
        }));
        setFormData(prev => ({...prev, numberCard: cleanedAndFormattedValue}));
       
    }

    const handleChangePersonCard = (e: ChangeEvent<HTMLInputElement>) => {
        const valid = validatePersonCard(e.target.value as string);
        setErrors((prev) => ({
            ...prev,
            personCardError: valid ? "" : "Имя владельца должно содержать только латиницу",
        }));
        setFormData(prev => ({...prev, PersonCard: e.target.value as string}));
    }

    const handleChangeCVV = (e: ChangeEvent<HTMLInputElement>) => {
        const CvvChecked = e.target.value.substring(0, 3);
        const valid = validateCVV(CvvChecked);
        setErrors((prev) => ({
            ...prev,
            cvvError: valid ? "" : "Код CVV должен содержать три цифры",
        }));
        setFormData(prev => ({...prev, CVV: CvvChecked}));
    }

    const handleChangeAdress = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, adress: e.target.value}));
    }

    const handleChangePoint = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, adressPoint : e.target.value}));
    }

    useEffect(() => {
        if (!!errors.cvvError || !!errors.numberCardError || !!errors.personCardError) {
            setButtonBuyDisabled(true)
        } else {
            setButtonBuyDisabled(false)
        }
    }, [errors])

    useEffect(() => {
        // Проверяем общую доступность формы
        const isValidAddressSelection =
            (formData.selectСourier && formData.adress.trim()) ||       
            (!formData.selectСourier && formData.adressPoint.trim()); 
    
        const isPaymentDataComplete =
        formData.formPaySelf ||
            (!formData.formPaySelf &&
                formData.numberCard.trim() !== "" &&
                formData.PersonCard.trim() !== "" &&
                formData.CVV.trim() !== "") && (!errors.cvvError || !errors.numberCardError || !errors.personCardError);
    
        // Блокировка кнопки, если данные заполнены некорректно
        setButtonBuyDisabled(!(isValidAddressSelection && isPaymentDataComplete));
    }, [
        formData
    ]);

    useEffect(() => {
        localStorage.setItem('orderForm', JSON.stringify(formData));
    }, [
        formData
    ]);

    const handleBuy = () => {
        dispatch(doOrder(formData));
        navigate('/orderComplited');
    }

    return (
        <div className={styles.container}>
            <span className={styles.selectPay}>Выберете способ получения</span>
            <div className={styles.twoButtons}>
                <div className={`${styles.selectPayButton} ${!formData.selectСourier ? styles.select : '' }`} onClick={() => {
                    setFormData(prev => ({...prev, selectСourier : false}));
                }}>
                    Самовывоз
                </div>
                <div className={`${styles.selectPayButton} ${formData.selectСourier ? styles.select : '' }`} onClick={() => {
                    setFormData(prev => ({...prev, selectСourier : true}));
                }}>
                    Курьер
                </div>
            </div>
            { formData.selectСourier && (
                <InputUI name='adress' type='text' title='Адрес' value={formData.adress} onChange={handleChangeAdress} placeholder='Введите адрес'/>
            )}
            { !formData.selectСourier && (
                <InputDropDown className={styles.pointTake} id='1' title='Пункт выдачи' withInput={false} value={formData.adressPoint} onChangeOption={handleChangePoint} placeholder='Выберите удобный пункт выдачи' options={[{value: 'ул.Мичурина, д.23', label: 'ул.Мичурина, д.23'}, {value: 'пр-т Королева, д.26', label: 'пр-т Королева, д.26'}, {value: 'пл. Ленина, д.17', label: 'пл. Ленина, д.17'}, {value: 'ул. Кирова, д.17', label: 'ул. Кирова, д.17'}, {value: 'ул. Сахарова, д.1', label: 'ул. Сахарова, д.1'}]}/>
            )}

            <span className={styles.selectPay}>Выберете способ оплаты</span>
            <div className={styles.twoButtons}>
                <div className={`${styles.selectPayButton} ${formData.formPaySelf ? styles.select : '' }`} onClick={() => {
                    setFormData(prev => ({...prev, formPaySelf : true}));
                    }}>Оплата при получении</div>
                <div className={`${styles.selectPayButton} ${!formData.formPaySelf ? styles.select : '' }`} onClick={() => {
                    setFormData(prev => ({...prev, formPaySelf : false}));
                    }}>Оплата картой онлайн</div>
            </div>
            { !formData.formPaySelf && (
                <>
                <span className={styles.infoCard}>Введите данные карты</span>
                <div className={styles.cardInputs}>
                    <InputUI error={!!errors.numberCardError} errorText={errors.numberCardError}  name='numberCard' type='text' title='Номер карты' value={formData.numberCard} onChange={handleChangeNumberCard} placeholder='Введите номер карты'/>
                    <InputUI error={!!errors.cvvError} errorText={errors.cvvError} halfSize name='cvvCard' type='text' title='CVV' value={formData.CVV} onChange={handleChangeCVV} placeholder='Введите код с обратной стороны'/>
                    <InputUI error={!!errors.personCardError} errorText={errors.personCardError} name='personCard' type='text' title='Владелец карты' value={formData.PersonCard} onChange={handleChangePersonCard} placeholder='Введите имя владельца'/>
                </div>
                </>
            )}
             
             <ButtonUI className={styles.buttonBuy} label='Совершить покупку' disabled={buttonBuyDisabled} onClick={handleBuy}/>
            
        
        </div>
    )
}

export default FormOderPage;  