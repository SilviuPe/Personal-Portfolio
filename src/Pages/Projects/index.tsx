import {useEffect, useState} from "react";
import Lottie from "lottie-react";

import projectsAnimation from "@assets/animations/projects.json";

import { HeaderComponent} from "@components/Header";
// @ts-ignore
import { ProjectBoxComponent, FooterComponent } from "@components";

import { ProjectBoxContent } from './components';

import testImage from "./test.png";

import type { ProjectsPageStateI } from './types.ts';

import './style.css';

const defaultPageState = {
    focusedProject: undefined
}

function ProjectsPage() {

    const [projectsPageState, setProjectPageState] = useState<ProjectsPageStateI>(defaultPageState)




    const updateState = (newState : object) => {
        setProjectPageState({
            ...projectsPageState,
            ...newState
        })
    }

    useEffect(() => {
        document.title = "Projects";
    }, []);

    return (
        <>
            <HeaderComponent/>

            <div className={'projects-page-container'}>
                <div className={'projects-page-content-container'}>
                    <div className={'projects-page-content-introduction'}>
                        <div className={'projects-page-content-introduction-text-content'}>
                            <h1>A curated collection <br/>
                                of my work </h1>
                            <p>From apps and automations to experiments.
                                Each project reflects my skills, creativity,
                                and problem-solving approach.</p>
                        </div>
                        <div className={'projects-page-content-introduction-animation'}>
                            <div className={'projects-page-content-introduction-animation-container'}>
                                <Lottie animationData={projectsAnimation} loop={true}/>
                            </div>
                        </div>
                    </div>
                    <div className={'projects-page-showcase-container'}>
                        <h2>SHOWCASE</h2>
                        <div className={'projects-page-showcase-content'}>
                            {
                                projectsPageState?.focusedProject
                                    ? <></>
                                    : <>
                                        <div onClick={()=>{updateState({focusedProject: 1})}}><ProjectBoxComponent image={testImage} content={<ProjectBoxContent/>}/></div>
                                    </>
                            }
                        </div>
                    </div>
                    <FooterComponent/>
                </div>
            </div>
        </>
    )
}

export { ProjectsPage };