import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <Link to={`/voters`} className="nav-link">Voters</Link>
          </li>
          <li className="nav-item active">
            <Link to={`/players`} className="nav-link">Players</Link>
          </li>
        </ul>
      </div>
    </nav>  
  )
}

export default Navbar



     
