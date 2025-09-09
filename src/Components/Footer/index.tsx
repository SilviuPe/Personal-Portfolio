import './style.css';

const pages = ['Home','Projects','Experience','Contact'];

const FooterComponent  = () => {
    return (
        <div className={'footer-component'}>
            <div>
                <div className={'links-list'}>
                    {pages.map(item => (<div key={item}>
                        <a href={`/${item.toLowerCase()}`}>{item}</a>
                    </div>))}
                </div>
            </div>
        </div>
    )
}

export {FooterComponent};

