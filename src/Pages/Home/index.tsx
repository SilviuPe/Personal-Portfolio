import { FooterComponent} from "@components/Footer";
import profilePhoto from "@assets/icons/profile.png";

import {GetInTouchButton,
    DownloadCVButton,
    ProjectsOverviewComponent,
    ExperienceOverviewComponents} from "./components";

import './style.css';

const subsitleText = "I am a seasoned software engineer with over 4 years of professional experience <br/>" +
    "                    specializing in automation, Python, backend & frontend applications. <br/>" +
    "                    My expertise lies in building smart automation for daily tasks <br/>" +
    "                    as well as end-to-end full stack web applications.";

function HomePage() {
    return (
        <div className={'home-page-container'}>
            <FooterComponent/>
            <div className={'home-page-content-container fade-in'}>
                <div className={'profile-image-container'}>
                    <img alt="profile" src={profilePhoto}/>
                </div>

                <div className={'title-container'}>
                    <h1>
                        Automation <span className={'green-span'}>with Python</span> <br/>
                        End-to-end full stack <br/>
                        <span className={'blue-span'}>web applications</span>
                    </h1>
                </div>

                <div className={'subtitle-container'}>
                    <p>
                        {subsitleText.split("<br/>").map((line, idx) =>
                            {
                                return <>
                                    <span key={`${line} -- ${idx}`} className={'line'}>{line}</span><br/>
                                </>
                            }
                        )}
                    </p>
                </div>

                <div className={'buttons-container'}>
                    <GetInTouchButton/>
                    <DownloadCVButton/>
                </div>

                <ProjectsOverviewComponent/>
                <ExperienceOverviewComponents/>
            </div>
        </div>
    )
}

export { HomePage };