import './style.css';

const GetInTouchButton = () => {
    return (<button className={'get-in-touch-button'} onClick={() => {
        document.location.href = '/contact';
    }}>Contact Me</button>)
}

export { GetInTouchButton };