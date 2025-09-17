import type {ExperienceSectionComponentPropsI} from "./types.ts";

import './style.css';

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const ExperienceSectionComponent = (props: ExperienceSectionComponentPropsI) => {

    const {icon, title, description, date} = props

    return (
        <div className={'experience-content-container'}>
            <div className={'experience-details-container'}>
                <div className={'experience-content-icon-title'}>
                    <div className={'experience-icon-container'}>
                        <img src={icon} alt={title} width={32} height={32}/>
                    </div>
                    <div className={'experience-title-container'}>
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className={'experience-date-container'}>
                    <div className={'experience-date-content'}>
                        <p>{months[date.start.getMonth()]} {date.start.getFullYear()} - {months[date.end.getMonth()]} {date.end.getFullYear()}</p>
                    </div>
                </div>
            </div>
            <div className={'experience-description-container'}>
                <p className={'experience-description-content'}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export {ExperienceSectionComponent};