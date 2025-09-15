// import {ProjectBoxComponent} from '@components/ProjectBox';

// import {ProjectBoxContentComponent} from './components';

import './style.css';



const ProjectsOverviewComponent = () => {
    return (
        <div className={'projects-overview-container'}>
            <div className={'projects-overview-title-container'}>
                <h2>Projects</h2>
            </div>
            <div className={'projects-container'}>
                {/*<ProjectBoxComponent image={testImage2} content={*/}
                {/*    // HARDCODED TITLE (NEED TO COME FROM BACKEND)*/}
                {/*    <ProjectBoxContentComponent title={'COSMIC TOOL'} subtitle={'CLICK HERE TO VISIT'} link={'/'}/>*/}
                {/*}/>*/}
                {/*<ProjectBoxComponent image={testImage1} content={*/}
                {/*    // HARDCODED TITLE (NEED TO COME FROM BACKEND)*/}
                {/*    <ProjectBoxContentComponent title={'FIVERR CRM'} subtitle={'CLICK HERE TO VISIT'} link={'/'}/>*/}
                {/*}/>*/}
                {/*<ProjectBoxComponent image={testImage} content={*/}
                {/*    // HARDCODED TITLE (NEED TO COME FROM BACKEND)*/}
                {/*    <ProjectBoxContentComponent title={'IMS PLATFORM'} subtitle={'CLICK HERE TO VISIT'} link={'/'}/>*/}
                {/*}/>*/}
            </div>
        </div>
    )
}

export { ProjectsOverviewComponent };