import PropTypes from 'prop-types'
import React from 'react'


export default function Navbar(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5">
                <href class="navbar-brand" to="/">{props.title}</href>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    
                    
                </ul>
                <div class="form-inline my-2 my-lg-0">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                    <href class="nav-href white" style={{color:"white", paddingRight: 10,}} to="/">Home <span class="sr-only">(current)</span></href>
                    </li>
                    <li class="nav-item active" style={{color:"white", paddingRight: 10}}>|</li>
                    <li class="nav-item">
                    <href class="nav-href" style={{color:"white", paddingRight: 10}} to="/about">About</href>
                    </li>
                    
                </ul>
                </div>
                <form class="form-inline my-2 my-lg-0 pl-5">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                </form>
                </div>
            </nav>            
        </div>
    )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired ,
  }

  /* default Props value passes by default if no value is called in Navbar in App.js*/
Navbar.defaultProps = {
    title : "Default Title"               
}