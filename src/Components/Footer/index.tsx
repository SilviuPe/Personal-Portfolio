import './style.css';

const pages = ['Home','Projects','Experience','Contact'];

const FooterComponent  = () => {
    return (
        <div className={'footer-component'}>
            <div>
                <ul className={'links-list'}>
                    {pages.map(item => (<li key={item}>
                        <a href={`/${item.toLowerCase()}`}>{item}</a>
                    </li>))}
                </ul>
            </div>
        </div>
    )
}

export {FooterComponent};

