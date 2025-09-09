import type {ExperienceSectionComponentPropsI} from "./types.ts";

import './style.css';

const ExperienceSectionComponent = (props: ExperienceSectionComponentPropsI) => {

    const {icon, title, description, date} = props

    return (
        <div className={'experience-content-container'}>
            <div className={'experience-details-container'}>
                <div className={'experience-content-icon-title'}>
                    <div className={'experience-icon-container'}>
                        <img src={icon} alt={title}/>
                    </div>
                    <div className={'experience-title-container'}>
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className={'experience-date-container'}>
                    <div className={'experience-date-content'}>
                        <p>{date.toDateString()}</p>
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