import {useSelector} from "react-redux";

export function Navbar() {

    const {amount} = useSelector(state => state.cart);

    return <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container">
            <a className="navbar-brand" href="#">Cart</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                </ul>
                <ul className="ms-auto navbar-nav">
                    <li className="nav-item">
                        <a className="position-relative nav-link active" aria-current="page" href="#">
                            <i className="bi bi-bag"></i>
                            <span
                                className="position-absolute badge rounded-pill bg-secondary"
                                style={{right: "-15px"}}
                            >
                                {amount}
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}