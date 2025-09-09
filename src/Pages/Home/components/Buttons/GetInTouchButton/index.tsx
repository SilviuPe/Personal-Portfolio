import './style.css';

const GetInTouchButton = () => {
    return (<button className={'get-in-touch-button'} onClick={() => {
        document.location.href = '/contact';
    }}>Get In Touch</button>)
}

export { GetInTouchButton };