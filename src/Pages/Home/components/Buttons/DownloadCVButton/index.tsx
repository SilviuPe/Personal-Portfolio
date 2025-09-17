import resume from '@assets/pdfs/Resume.pdf'

import './style.css';

const DownloadCVButton = () => {
    return (
        <a href={resume}><button className={'download-cv-button'}>View Resume</button></a>
    )
}

export { DownloadCVButton };