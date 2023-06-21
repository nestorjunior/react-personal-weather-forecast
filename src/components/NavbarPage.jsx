import { Link } from "react-router-dom"
import './NavbarPage.css'

const NavbarPage = () => {
    return(
        <>
            <div className="container container-nav-page">
                <nav>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Signup</Link>
                </nav>
            </div>
        </>
    )
}

export default NavbarPage