import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <div className="bg-dark">
                <div className="container">
                    <div className="row">
                        <nav className="col navbar navbar-expand-lg navbar-dark">
                            <a className="navbar-brand" href="index.html">
                                <img src="image/logo.png" width="50" height="50" alt="Info Logo" /> Info School
                    </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div id="navbarContent" className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="index.html">Accueil</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="lessons.html">Cours</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}
export default Navbar