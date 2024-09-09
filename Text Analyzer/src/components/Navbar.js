import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'


export default function Navbar(props) {
    return (

        <nav className={`shadow p-3 navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`form-check form-switch mx-4 text-${props.mode==='dark'? 'light': 'dark'}`}>
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Theme</label>
                </div>

            </div>

        </nav>
    );
}

Navbar.protoTypes = {
    title: PropTypes.string,
}

Navbar.defaultProps = {
    title: "Set Title Here",
}

