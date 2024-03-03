
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
    let location = useLocation()
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem('access_token')
        navigate('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="navbar-brand" href="/">
                    iNoteBook
                </p>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('access_token')?
                    <>
                    <Link to="/login" className="btn btn-primary  mx-2" tabIndex="-1" role="button" aria-disabled="true">Login</Link>
                    <Link to="/signUp" className="btn btn-primary Name" tabIndex="-1" role="button" aria-disabled="true">Sign Up</Link>
                    </> : <button className="btn btn-primary" onClick={handleLogout}>Log out</button>}
                    

                </div>
            </div>
        </nav>
    );
}
