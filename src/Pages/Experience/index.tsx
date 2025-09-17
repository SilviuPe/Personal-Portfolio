import {useEffect} from "react";
import Lottie from 'lottie-react';

import experienceAnimation from '@assets/animations/experience.json';
import personalImage from '@assets/experience-gallery/personal-photo-shot.webp'
import clockIcon from '@assets/icons/clockIcon.webp';
import PrimcastLogo from '@assets/icons/Primcast-logo.webp';
import fiverrGreenIcon from '@assets/icons/fiverrGreenIcon.webp';

import {HeaderComponent} from "@components/Header";

import { ExperienceSectionComponent} from "./components";

import './style.css';
import {FooterComponent} from "@components/Footer";

const primcastDescription = "Primcast is a dedicated hosting platform that provides businesses and developers with reliable bare-metal infrastructure. \n" +
    "Built for performance and scalability, it delivers low-latency connectivity through a global network and offers rapid provisioning so users can get servers online almost instantly. With options ranging from entry-level machines to powerful GPU servers, Primcast supports a wide spectrum of workloads, including web applications, media streaming, artificial intelligence, and other compute-intensive tasks. The platform emphasizes stability, speed, and affordability, making it a practical choice for freelancers, startups, and enterprises seeking dependable hosting solutions."

const primcastRoleFrontend = "I handled frontend development for our applications using React and TypeScript, fixed bugs, added new\n" +
    "features, and collaborated closely with the backend developer to successfully implement those features."
const primcastRoleSales = "Salesperson – worked closely with clients to understand their needs and budget, providing tailored solutions to meet their requirements. Developed and applied professional sales techniques, built strong client relationships, and gained experience in negotiation and customer communication."
const primcastRoleSupport = "Technical Support Operator – ensured proper functioning of client servers and services, maintained Linux and Windows servers, ensured they were delivered and fully operational for each client, communicated with clients via phone, chat, and email, and developed professional communication skills."

const rolesPrimcast = [
    {
        title: 'Role: Technical Customer Support',
        schedule: 'Full-time',
        timestamp: {
            dateStart: new Date(2024,1),
            dateEnd: new Date(2025,1),
        },
        description: primcastRoleSupport,
    },
    {
        title: 'Role: Salesperson',
        schedule: 'Full-time',
        timestamp: {
            dateStart: new Date(2024,8),
            dateEnd: new Date(2025,1),
        },
        description: primcastRoleSales,
    },
    {
        title: 'Role: Frontend Developer',
        schedule: 'Full-time',
        timestamp: {
            dateStart: new Date(2025,1),
            dateEnd: new Date(2025,6),
        },
        description: primcastRoleFrontend,
    }
]


const fiverrGeneralDesc = "Fiverr is an online marketplace where freelancers offer digital services to clients worldwide. Originally built around $5 gigs, it has grown into a platform covering everything from design and writing to programming and marketing. Freelancers use it to showcase skills and build income, while clients gain quick, flexible access to a wide range of talent."
const fiverrDescriptionRole = "My journey on Fiverr began in May 2021 with simple tasks for various clients and a few hours of Python tutoring. Over the years, I’ve had the chance to collaborate with more than 60 people from around the world, working on everything from small tasks to large-scale projects in different industries. I help clients with day-to-day tasks, AI automation and integration, as well as developing demo applications for Desktop, Web, and Mobile."
const fiverrRoles = [
    {
        title: 'Role: Fiverr Freelancer',
        schedule: 'Full-time',
        timestamp: {
            dateStart: new Date(2021,4),
            dateEnd: new Date(),
        },
        description: fiverrDescriptionRole,
    }
]


function ExperiencePage() {

    useEffect(() => {
        document.title = "Experience";
    }, []);

    return (
        <>
            <HeaderComponent/>

            <div className={'experience-page-container'}>
                <div className={'experience-page-content-container'}>
                    <div className={'experience-page-content-introduction'}>
                        <div className={'experience-page-content-introduction-animation'}>
                            <div className={'experience-page-content-introduction-animation-container'}>
                                <Lottie animationData={experienceAnimation} loop={true} />
                            </div>
                        </div>
                        <div className={'experience-page-content-introduction-text-content'}>
                            <h1>Professional Experience</h1>
                            <p>A snapshot of my career journey, showcasing <br/>
                                roles where I contributed to projects, solved <br/>
                                real-world problems, and honed my technical <br/>
                                and collaborative skills.</p>
                        </div>
                    </div>
                    <div className={'experience-page-content-current-activity-container'}>
                        <div className={'experience-page-content-current-activity-content'}>
                            <div className={'experience-page-content-current-activity-text-content'}>
                                <h2>Current Professional Activity</h2>
                                <p>I am currently a full-time freelancer, <br/>
                                    collaborating with new clients while nurturing strong, <br/>
                                    long-term professional relationships.</p>

                                <div className={'current-schedule'}>
                                    <img src={clockIcon} alt="clockIcon" width={14} height={14}/>
                                    <p>Current schedule: Full-time / Mon - Sun</p>
                                </div>
                            </div>
                            <div className={'experience-page-content-current-activity-image-content'}>
                                <img src={personalImage} alt="personal-photo" width={500} height={390} />
                            </div>
                        </div>
                    </div>
                    <div className={'experience-page-content-past-activity-list'}>
                        <ExperienceSectionComponent title={'Primcast Journey'} companyIcon={PrimcastLogo} description={primcastDescription} roles={rolesPrimcast}/>
                        <ExperienceSectionComponent title={'Fiverr Journey'} companyIcon={fiverrGreenIcon} description={fiverrGeneralDesc} roles={fiverrRoles}/>
                    </div>
                    <FooterComponent/>
                </div>
            </div>
        </>
    )
}

export { ExperiencePage };