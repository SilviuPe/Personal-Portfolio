import { useSearchParams } from 'react-router-dom';
import {useEffect, useState} from "react";
import Lottie from "lottie-react";

import projectsAnimation from "@assets/animations/projects.json";
// @ts-ignore
import { FetchProjectsData } from "@api";
import type { FetchProjectsDataItemI } from '@api/Projects/types';

import { HeaderComponent} from "@components/Header";
// @ts-ignore
import { ProjectBoxComponent, FooterComponent, LoadingBarComponent, DialogBoxComponent } from "@components";

import { ProjectBoxContent, ExpandedProjectBoxComponent } from './components';

import type { ProjectsPageStateI } from './types.ts';

import './style.css';

const defaultPageState = {
    focusedProject: undefined
}

function ProjectsPage() {
    const { data, loading, error } = FetchProjectsData()
    const [projectsPageState, setProjectPageState] = useState<ProjectsPageStateI>(defaultPageState)

    const [searchParams] = useSearchParams();
    const repoUrl = searchParams.get('repo_url');

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

        const hash = window.location.hash;

        if (hash) {
            const section = document.querySelector(hash);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }

        if (repoUrl) {
            updateState({focusedProject: repoUrl})
        }

    }, []);

    useEffect(() => {
        if (projectsPageState.focusedProject === undefined) {
            document.body.style.overflow = 'visible';
        }
        else {
            document.body.style.overflow = 'hidden';
        }

    }, [projectsPageState]);

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
                    <div className={'projects-page-showcase-container'} id={'showcase'}>
                        <h2>SHOWCASE</h2>
                        <div className={'projects-page-showcase-content'}>
                            {
                                loading ? <><LoadingBarComponent width={100} height={100}/></> : error ?
                                <>{error}</> : data ?

                                        <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                                            <div className={'project-extended-description-container'}>
                                                {
                                                    data
                                                        .map((item: FetchProjectsDataItemI, index: number) => (
                                                            <div key={`${item} -- ${index}`} onClick={(e)=>{
                                                                e.stopPropagation();updateState({focusedProject:item.repo_url})
                                                            }}><ProjectBoxComponent banner={item?.banner_url} content={<ProjectBoxContent/>}/></div>
                                                        ))
                                                }
                                                {
                                                    projectsPageState.focusedProject ?
                                                        data.filter((item: FetchProjectsDataItemI) => item.repo_url === projectsPageState.focusedProject)
                                                            .map((item: FetchProjectsDataItemI, index: number) => (
                                                                <DialogBoxComponent closeCallback={displayAllProjects} open={true} content={
                                                                    <div key={`${item}--${index}`}><ExpandedProjectBoxComponent data={item} callbackMinimizeEvent={displayAllProjects}/></div>
                                                                }/>
                                                            )) : null
                                                }
                                            </div>
                                        </div> : null
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