import type { FC } from 'react';
import type { TAllcategory } from '../../../entities/skill/types';
import { categoryColors } from '../../lib/constants';
import BookSvg from '../assets/book.svg?react';
import BriefCaseSvg from '../assets/briefcase.svg?react';
import GlobalSvg from '../assets/global.svg?react';
import HomeSvg from '../assets/home.svg?react';
import LifestyleSvg from '../assets/lifestyle.svg?react';
import PaletteSvg from '../assets/palette.svg?react';
import { BaseDropdown } from '../baseDropdown';
import style from './SkillsListHeader.module.css';

type TSkillsListHeader = {
    trigger?: React.ReactNode;
    allCategory: TAllcategory;
};
// функция для рендера свг в зависимости от категории
const svgRender = (key: string): React.ReactElement | null => {
    switch (key) {
        case 'Бизнес и карьера':
            return (
                <BriefCaseSvg
                    style={{
                        backgroundColor: `var(${categoryColors[key as keyof typeof categoryColors].bg})`
                    }}
                    className={style.svg}
                />
            );
        case 'Творчество и искусство':
            return (
                <PaletteSvg
                    style={{
                        backgroundColor: `var(${categoryColors[key as keyof typeof categoryColors].bg})`
                    }}
                    className={style.svg}
                />
            );
        case 'Иностранные языки':
            return (
                <GlobalSvg
                    style={{
                        backgroundColor: `var(${categoryColors[key as keyof typeof categoryColors].bg})`
                    }}
                    className={style.svg}
                />
            );
        case 'Образование и развитие':
            return (
                <BookSvg
                    style={{
                        backgroundColor: `var(${categoryColors[key as keyof typeof categoryColors].bg})`
                    }}
                    className={style.svg}
                />
            );
        case 'Здоровье и лайфстайл':
            return (
                <LifestyleSvg
                    style={{
                        backgroundColor: `var(${categoryColors[key as keyof typeof categoryColors].bg})`
                    }}
                    className={style.svg}
                />
            );
        case 'Дом и уют':
            return (
                <HomeSvg
                    style={{
                        backgroundColor: `var(${categoryColors[key as keyof typeof categoryColors].bg})`
                    }}
                    className={style.svg}
                />
            );
        default:
            return null;
    }
};

export const SkillsListHeader: FC<TSkillsListHeader> = ({
    trigger,
    allCategory
}) => {
    const categoryKeys = Object.keys(allCategory);
    return (
        <BaseDropdown trigger={trigger}>
            <div className={style.skillListSection}>
                {categoryKeys.map(key => (
                    <div className={style.skillListBlock} key={key}>
                        {svgRender(key)}
                        <div className={style.skillListContainer}>
                            <h2 id={key} className={style.skillListHeader}>
                                {key}
                            </h2>
                            <ul
                                aria-labelledby={key}
                                className={style.skillList}
                            >
                                {allCategory[
                                    key as keyof typeof allCategory
                                ].map(categoryEl => (
                                    <li
                                        key={categoryEl}
                                        className={style.skillItem}
                                    >
                                        {categoryEl}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </BaseDropdown>
    );
};
