import type { FC } from 'react';
import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './inputDropDownCalendar.module.css';
import type { InputDropDownCalendarProps } from './type';
import { SimpleDatePicker } from '../../calendar/datepicker';

// Функция проверки правильности формата даты (DD/MM/YYYY).
const isValidDateFormat = (dateStr: string) => {
    // Поддерживаем три варианта разделителя: точка `.`, дефис `-` и слэш `/`
    const regex = /^\d{1,2}[./-]\d{1,2}[./-]\d{4}$/;
    return regex.test(dateStr);
};

export const InputDropDownCalendar: FC<InputDropDownCalendarProps> = ({
    onChangeDate,
    className = '',
    id,
    title,
    value,
    placeholder,
    error
}) => {
    const calendarRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Получаем цель клика
            const targetNode = event.target as HTMLElement;

            // Проверяем, произошло ли событие внутри самого компонента или вне
            if (
                containerRef.current &&
                !containerRef.current.contains(targetNode) &&
                !(
                    calendarRef.current &&
                    calendarRef.current.contains(targetNode)
                )
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [selectDate, setSelectDate] = useState<Date | null>(null); // Дата, выбранная в календаре
    const [isOpen, setIsOpen] = useState(false); // Флаг открытия окна календаря
    const [manualInput, setManualInput] = useState<string>(''); // Ручной ввод даты

    const handleOnChange = (date: Date | null) => {
        setManualInput('');
        setSelectDate(date);
        onChangeDate(date);
        setIsOpen(false);
    };

    // Обработчик изменения при вводе вручную
    const handleManualInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const inputValue = event.target.value.trim();
        if (inputValue === '') {
            setSelectDate(null);
            onChangeDate(null); // Оповещаем родительский компонент об очистке выбора
            setManualInput('');
            return;
        }
        // Проверяем, является ли введённая строка валидной датой
        if (isValidDateFormat(inputValue)) {
            try {
                // Замещаем точки на запятые, чтобы корректно передать новую дату
                let parsedDate = new Date(inputValue.replace(/\./g, ','));

                if (!isNaN(parsedDate.getTime())) {
                    setSelectDate(parsedDate); // Устанавливаем выбор даты
                    onChangeDate(parsedDate); // Отправляем реальную дату в колбек
                }
            } catch (err) {}
        }

        setManualInput(inputValue); // Сохраняем текущее значение ввода
    };

    return (
        <>
            <div className={`${styles.container} ${className}`}>
                <label className={styles.label} htmlFor={id}>
                    {title}
                </label>

                <div
                    ref={containerRef}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className={styles.select}
                >
                    <input
                        ref={inputRef}
                        type="text"
                        id={id}
                        name={id}
                        autoComplete="off"
                        className={`${
                            !!error ? `${styles.inputError}` : ''
                        } ${styles.input}`}
                        placeholder={placeholder || ''}
                        value={
                            manualInput ||
                            (selectDate?.toLocaleDateString() ?? '')
                        }
                        onChange={handleManualInputChange}
                        onFocus={() => setIsOpen(true)}
                    />
                </div>

                {isOpen && (
                    <div
                        ref={calendarRef}
                        className={`${isOpen ? `${styles.optionsContainerOpen} ${styles.optionsContainer}` : styles.optionsContainer}`}
                    >
                        <SimpleDatePicker
                            onChange={handleOnChange}
                            selected={value}
                        />
                    </div>
                )}
            </div>

            {error && <span className={styles.error}>{error}</span>}
        </>
    );
};
