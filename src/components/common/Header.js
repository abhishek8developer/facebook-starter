import React, { Component } from 'react'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import '../../styles/header.css'

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-md navbar-light bg-transparent">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src={logo} alt=""/></a>
                    <button className="navbar-toggler ml-3" data-toggle="collapse" data-target="#menu" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center py-3 py-md-0" id="menu">
                    <ul className="navbar-nav w-100 justify-content-around pb-3 pb-md-0">
                        <li className="nav-item"><a className="nav-link" href="/">How it works</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">FAQ</a></li>
                    </ul>
                    <button type="button" className="btn btn-primary ml-auto mr-1">Login</button>
                    <a href="/cleaners/" className="btn btn-success ml-2">Cleaning jobs</a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;