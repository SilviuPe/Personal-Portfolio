import {useEffect} from "react";

import checkPointLocation from '@assets/icons/checkPoint.webp';
import emailIcon from '@assets/icons/emailIconFilled.webp';
import linkedinIcon from '@assets/icons/linkedinIcon.webp';
import phoneIcon from '@assets/icons/phoneIcon.webp';
import githubIcon from '@assets/icons/githubIcon.webp';
import fiverrIcon from '@assets/icons/fiverrIcon.webp';

import { HeaderComponent} from "@components/Header";

import { ContactInfoSectionComponent, RedirectActionComponent, CopyActionComponent } from './components';

import './style.css';

function ContactPage() {

    useEffect(() => {
        document.title = "Contact";
    }, []);

    return (
        <div className={'contact-page-container'}>
            <HeaderComponent/>
            <div className={'contact-page-content-container'}>
                <div className={'contact-page-content-title'}>
                    <h1>Contact</h1>
                </div>
                <div className={'contact-page-content-subtitle'}>
                    <p>You can reach me through any of the channels below.</p>
                </div>
            </div>

            <div className={'contact-page-content-contacts-list-container'}>
                <div className={'contact-page-content-contacts-list-content'}>
                    <ContactInfoSectionComponent title={'NAME & LOCATION'} value={"Silviu Petrea - Galati, Romania"} icon={checkPointLocation} actionContent={<CopyActionComponent valueToCopy={"Silviu Petrea - Galati, Romania"}/>}/>
                    <ContactInfoSectionComponent title={'EMAIL'} value={"silviupetrea60@gmail.com"} icon={emailIcon} actionContent={<CopyActionComponent valueToCopy={"silviupetrea60@gmail.com"}/>}/>
                    <ContactInfoSectionComponent title={'PHONE'} value={"(RO) +40 743 927 416"} icon={phoneIcon} actionContent={<CopyActionComponent valueToCopy={"+40 743 927 416"}/>}/>
                    <ContactInfoSectionComponent title={'FIVERR'} value={"Fiverr Profile"} icon={fiverrIcon} actionContent={<RedirectActionComponent linkToRedirect={"https://fiverr.com/pythonpro_"}/>}/>
                    <ContactInfoSectionComponent title={'LINKEDIN'} value={"LinkedIn Profile"} icon={linkedinIcon} actionContent={<RedirectActionComponent linkToRedirect={"https://www.linkedin.com/in/petrea-silviu-836001231/"}/>}/>
                    <ContactInfoSectionComponent title={'GITHUB'} value={"Github Profile"} icon={githubIcon} actionContent={<RedirectActionComponent linkToRedirect={"https://github.com/SilviuPe"}/>}/>
                </div>
            </div>
        </div>
    )
}

export { ContactPage };