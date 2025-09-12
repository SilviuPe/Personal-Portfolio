import type { ExperienceSectionComponentPropsI} from "./types";

import './style.css';
import {RoleComponent} from "./components";

const ExperienceSectionComponent = (props : ExperienceSectionComponentPropsI) => {

    const {title, companyIcon, description, roles} = props;

    return (
        <div className={'experience-section-component-container'}>
            <div className={'experience-section-title-container'}>
                <h1>{title}</h1>
                <img src={companyIcon} alt={title} width={26} height={26} />
            </div>
            <div className={'experience-section-description-container'}>
                <p>{description}</p>
            </div>
            <div className={'experience-section-roles-list-container'}>
                {roles.map(role => (
                    <RoleComponent title={role.title} schedule={role.schedule} timestamp={role.timestamp} description={role.description}/>
                ))}
            </div>
        </div>
    )
}


export { ExperienceSectionComponent };