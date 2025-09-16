import type {ProjectBoxComponentPropsI} from './types';

import './style.css';

const ProjectBoxComponent = (props: ProjectBoxComponentPropsI) => {

    const { banner, content } = props;

    return (
            <div className={"project-box-container"}>
                <div className="project-box-banner-container">
                    <img alt='project' className="project-box-banner" src={banner} width={390} height={235} />
                </div>
                <div className={'project-box-content-container'}>
                    {content}
                </div>
            </div>
    )
}

export { ProjectBoxComponent };