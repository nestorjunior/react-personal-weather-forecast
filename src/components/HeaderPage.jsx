import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const HeaderPage = () => {
    return (
        <>
            <header className="container-fluid">
                <nav className="navbar bg-body-tertiary">
                    <span className="navbar-brand mb-0 h3">Navbar</span>
                    <FontAwesomeIcon icon={faUser} />
                </nav>
            </header>
        </>
    )
}

export default HeaderPage;