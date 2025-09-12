import type {ContactInfoSectionComponentPropsI} from './types';
import './style.css';

const ContactInfoSectionComponent = (props: ContactInfoSectionComponentPropsI) => {

    const {icon, title, value, actionContent } = props;

    return (
        <div className={'contact-info-container'}>
            <div className={'contact-info-content'}>
                <div className={'contact-info-icon-container'}>
                    <img alt={'contact-info-icon'} src={icon} width={18}/>
                </div>
                <div className={'contact-info-title-value-container'}>
                    <div className={'contact-info-title-container'}>
                        <h2>{title}</h2>
                    </div>
                    <div className={'contact-info-value-container'}>
                        <p>{value}</p>
                    </div>
                </div>
            </div>
            <div className={'contact-info-content-action'}>
                {actionContent}
            </div>
        </div>
    )
}

export { ContactInfoSectionComponent };