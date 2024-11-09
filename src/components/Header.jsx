import Search from "./Search"

function Header({ title, type = 'warning'}) {
    
    return (
        <nav className={'navbar navbar-expand-lg bg-' + type} data-bs-theme={type}>
            <div className="container pt-1 pb-1">
                <a className="navbar-brand d-flex gap-2" href="/">
                    <img src="/Clapperboard.png" alt="pctImg" style={{width: '40px'}} />
                    <span className="align-content-center fw-bold">{title}</span>
                </a>
                <Search />
            </div>
        </nav>
    )
}

export default Header