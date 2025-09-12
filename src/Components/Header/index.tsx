import './style.css';

const pages = ['Home','Projects','Experience','Contact'];

const HeaderComponent  = () => {
    return (
        <div className={'header-component'}>
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

export {HeaderComponent};

