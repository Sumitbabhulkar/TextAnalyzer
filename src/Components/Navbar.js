import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import React from 'react'


export default function Navbar(props) {
  return (
    <>
    <div>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.About}</Link>
          </li>

        </ul>
        <div class={`form-check form-switch" text-${props.mode==='light'?'dark':'light'}`}>
        <input class="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
        <label class="form-check-label" for="flexSwitchCheckDefault">{props.btnText}</label>
        </div>
      </div>
    </nav>
    </div>
    </>
    
  );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string

}

Navbar.defaultProps = {
    title : "set title here",
    About : "About"
}