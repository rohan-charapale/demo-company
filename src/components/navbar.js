import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faCog, faBell ,faList,faTh } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand ">Demo Company</span>

        <ul className="navbar-nav " >
          <li className="nav-item">
            <span className="nav-link mx-3">Home</span>
          </li>
          <li className="nav-item">
            <span className="nav-link mx-3">About</span>
          </li>
          <li className="nav-item">
            <span className="nav-link mx-3">Work</span>
          </li>
          <li className="nav-item">
            <span className="nav-link mx-3">Pricing</span>
          </li>
          <li className="nav-item">
            <span className="nav-link mx-3">Blog</span>
          </li>
        </ul>
            <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faCog} />
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faBell} />
            </a>
          </li>
                <li className="nav-item mx-3">
                    <img
                        src="https://cataas.com/cat/cute"
                        alt="User"
                        className="rounded-circle"
                        width="30"
                        height="30"
                    />
                </li>
            </ul>
    </nav>

    <hr className="custom-hr"/>

    <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid ">
          <span className="navbar-text h2"  style={{ color: '#ffffff' }}>We tackle interesting topics every day</span>
        </div>
    </nav>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div className="input-group mb-4">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
              type="text"
              className="form-control me-1 custom-search"
              placeholder="Find Courses"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item ">
          <FontAwesomeIcon icon={faList} className='custom-icon mx-3'/>
          </li>
          <li className="nav-item">
            <FontAwesomeIcon icon={faTh} className='custom-icon mx-3 custom-th'/>
          </li>
        </ul>
      </div>
    </nav>

    </div>
  );
}

export default Navbar;
