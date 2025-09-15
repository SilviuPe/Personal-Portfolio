import redirectIcon from '@assets/icons/redirectIconUp.png';

import './style.css';

const ProjectBoxContent = () => {


    return <div className={'view-more-details'} >
        <p>VIEW DETAILS</p>
        <img alt={'show more'} src={redirectIcon} width={12}/>
    </div>
}

export { ProjectBoxContent };