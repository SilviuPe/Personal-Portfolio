import redirectIcon from '@assets/icons/redirectIconUp.png';

import type {ProjectBoxContentComponentPropsI} from './types';

import './style.css';

const ProjectBoxContentComponent = (props: ProjectBoxContentComponentPropsI) => {
    const {title, subtitle } = props;

    return (
        <div className={'project-box-content'}>
            <div className={'project-box-content-title-subtitle'}>
                <div className={'project-box-subtitle-container'}>
                    <p className={'project-box-subtitle'}>{subtitle}</p>
                </div>
                <div className={'project-box-title-container'}>
                    <p className={'project-box-title'}>{title}</p>
                </div>
            </div>
            <div className={'project-box-redirect-section-container'}>
                <img alt={'redirect'} src={redirectIcon} width={12} height={12}/>
            </div>
        </div>
    )
}

export {ProjectBoxContentComponent};