import {useEffect, useState} from "react";
import Lottie from "lottie-react";

import projectsAnimation from "@assets/animations/projects.json";
// @ts-ignore
import { FetchProjectsData } from "@api";
import type { FetchProjectsDataItemI } from '@api/Projects/types';

import { HeaderComponent} from "@components/Header";
// @ts-ignore
import { ProjectBoxComponent, FooterComponent, LoadingBarComponent } from "@components";

import { ProjectBoxContent, ExpandedProjectBoxComponent } from './components';

import type { ProjectsPageStateI } from './types.ts';

import './style.css';

const defaultPageState = {
    focusedProject: undefined
}

function ProjectsPage() {
    const { data, loading, error } = FetchProjectsData()
    const [projectsPageState, setProjectPageState] = useState<ProjectsPageStateI>(defaultPageState)


    // @ts-ignore
    const updateState = (newState : object) => {
        setProjectPageState((prevState) => ({
            ...prevState,
            ...newState
        }))
    }

    const displayAllProjects = () => {
        updateState({focusedProject: undefined})
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
                                loading ? <><LoadingBarComponent width={100} height={100}/></> : error ?
                                <>{error}</> : data ?
                                        projectsPageState?.focusedProject?
                                            data
                                                .filter((item: FetchProjectsDataItemI) => projectsPageState?.focusedProject === item.repo_url)
                                                .map((item: FetchProjectsDataItemI)=> <ExpandedProjectBoxComponent data={item} callbackMinimizeEvent={displayAllProjects}/>)

                                            : data.map((item:FetchProjectsDataItemI) => <div onClick={(e)=>{
                                                e.stopPropagation();updateState({focusedProject:item.repo_url})
                                            }}><ProjectBoxComponent expand={false} banner={item?.banner_url} content={<ProjectBoxContent/>}/></div>)
                                            : null
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