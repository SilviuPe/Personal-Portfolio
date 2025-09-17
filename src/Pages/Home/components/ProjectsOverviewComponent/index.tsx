import {ProjectBoxComponent} from '@components/ProjectBox';
import { LoadingBarComponent } from "@components/LoadingBar";

import { FetchProjectsData} from "@api/Projects";

import {ProjectBoxContentComponent} from './components';
import './style.css';



const ProjectsOverviewComponent = () => {

    const {loading, error, data} = FetchProjectsData();

    return (
        <div className={'projects-overview-container'}>
            <div className={'projects-overview-title-container'}>
                <h2>Projects</h2>
            </div>
            <div className={'projects-container'}>
                {
                    loading ?
                        <LoadingBarComponent width={200} height={200}/>
                            : error ?
                                <p>{error}</p> :
                                    data?.map((item, index) => (
                                        <div key={`${item} -- ${index}`} onClick={(e)=>{
                                            e.stopPropagation();
                                            window.location.href=`/projects?repo_url=${item.repo_url}#showcase`;
                                        }}>
                                            <ProjectBoxComponent banner={item.banner_url} content={
                                                <ProjectBoxContentComponent title={item.project_name} subtitle={'CLICK HERE TO VISIT'}/>
                                            }/>
                                        </div>
                                    ))

                }
            </div>
        </div>
    )
}

export { ProjectsOverviewComponent };