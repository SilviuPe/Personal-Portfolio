import {ExperienceSectionComponent} from './components';

import './style.css';

import redirectIcon from '@assets/icons/redirectIconUp.png'
// ########################################################################################## - HARDCODED (NEED TO COME FROM BACKEND)

import supportIcon from '@assets/icons/customerSupportIcon.png';
import salesmanIcon from '@assets/icons/salesmanIcon.png';
import developmentIcon from '@assets/icons/developmentSetup.png';

const primcastRoleSupport = "Technical Support Operator – ensured proper functioning of client servers and services, maintained Linux and Windows servers, ensured they were delivered and fully operational for each client, communicated with clients via phone, chat, and email, and developed professional communication skills."
const primcastRoleSales = "Salesperson – worked closely with clients to understand their needs and budget, providing tailored solutions to meet their requirements. Developed and applied professional sales techniques, built strong client relationships, and gained experience in negotiation and customer communication."
const primcastRoleDeveloper = "I handled frontend development for our applications using React and TypeScript, fixed bugs, added new features, and collaborated closely with the backend developer to successfully implement those features."

const roles = [
    {
        icon: developmentIcon,
        title: "Frontend Developer at Primcast",
        description: primcastRoleDeveloper,
        date: {
            start: new Date(2025,1),
            end: new Date(2025,6),
        }
    },
    {
        icon: salesmanIcon,
        title: "Salesperson at Primcast",
        description: primcastRoleSales,
        date: {
            start: new Date(2024,8),
            end: new Date(2025,1),
        }
    },
    {
        icon: supportIcon,
        title: "Customer Technical Support at Primcast",
        description: primcastRoleSupport,
        date: {
            start: new Date(2024,1),
            end: new Date(2025,1),
        }
    }
]

const ExperienceOverviewComponents = () => {
    return (
        <div className={'experience-overview-container'}>
            <div className={'experience-overview-title-container'}>
                <h2>Experience</h2>
            </div>
            <div className={'experience-list-content-container'}>
                {
                    roles.map((item) => (
                        <ExperienceSectionComponent icon={item.icon} title={item.title} description={item.description} date={item.date} />
                    ))
                }
            </div>
            <div className={'experience-redirect-link-container'}>
                <div className={'experience-redirect-link-content'} onClick={(event) => {
                    event.stopPropagation();
                    document.location.href = '/experience';
                }}>
                    <p>View More</p>
                    <img src={redirectIcon} alt={'redirect'} width={12} height={12}/>
                </div>
            </div>
        </div>
    )
}

export { ExperienceOverviewComponents };