import emailIcon from '@assets/icons/emailIcon.webp';
import instagramIcon from '@assets/icons/instagramIcon.webp';
import linkedinIcon from '@assets/icons/linkedinIcon.webp';
import youtubeIcon from '@assets/icons/youtubeIcon.webp';

import './style.css';

const FooterComponent = () => {
    return (
        <div className={'footer-component-container'}>
            <div className={'footer-content-container'}>
                <div className={'footer-content-title-container'}>
                    <h3>About</h3>
                </div>
                <div className={'footer-content-description-container'}>
                    <p>Seasoned Software Engineer with over 4 years of hands-on experience in developing backend applications with Python Flask, building automation workflows in Python, and integrating AI-powered solutions. Adept at leveraging a comprehensive skill set that spans frontend development with React, TypeScript, Vanilla JS, Tailwind CSS, and HTML.</p>
                </div>
                <div className={'footer-content-email-container'}>
                    <img src={emailIcon} alt={'email'} width={24} height={24} />
                    <p>silviupetrea60@gmail.com</p>
                </div>
                <div className={'footer-content-social-media-container'}>
                    <img src={instagramIcon} alt={'instagram'} width={20} height={20} />
                    <img src={linkedinIcon} alt={'linkedin'} width={20} height={20} />
                    <img src={youtubeIcon} alt={'youtube'} width={28} height={20} />
                </div>
            </div>
        </div>
    )
}

export { FooterComponent };