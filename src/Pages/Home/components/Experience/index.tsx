import {ExperienceSectionComponent} from './components';

import './style.css';


// ########################################################################################## - HARDCODED (NEED TO COME FROM BACKEND)

import supportIcon from '@assets/icons/customerSupportIcon.png';
import salesmanIcon from '@assets/icons/salesmanIcon.png';
import developmentIcon from '@assets/icons/developmentSetup.png';

const description = "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
const title = "Customer Technical Support at Primcast"

const description1 = "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
const title1 = "Salesperson at Primcast"

const description2 = "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
const title2 = "Frontend Develoeper at Primcast"

// ########################################################################################## - HARDCODED (NEED TO COME FROM BACKEND)

const ExperienceOverviewComponents = () => {
    return (
        <div className={'experience-overview-container'}>
            <div className={'experience-overview-title-container'}>
                <h2>Experience</h2>
            </div>
            <div className={'experience-list-content-container'}>
                <ExperienceSectionComponent icon={supportIcon} title={title} description={description} date={new Date()} />
                <ExperienceSectionComponent icon={salesmanIcon} title={title1} description={description1} date={new Date()} />
                <ExperienceSectionComponent icon={developmentIcon} title={title2} description={description2} date={new Date()} />
            </div>
        </div>
    )
}

export {ExperienceOverviewComponents};