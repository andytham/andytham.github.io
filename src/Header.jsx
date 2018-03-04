import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render(){
    return(
      <div className="header">
        <div className="name-wrapper">
          <div className='name'> ANDY </div>
          <div className='name'> THAM </div>
          <div className='tagline'> - full stack developer - </div>
        </div>
        <div className='nav-wrapper'>
          <div className="nav">
            <Link className="nav-link" to="/"> home </Link>
          </div>
          <div className="nav">
            <Link className="nav-link" to="/about"> about </Link>
          </div>
          <div className="nav">
            <a className="nav-link" href="https://github.com/andytham"> github </a>
          </div>
        </div>
      </div>
    )
  }
}
 export default Header;
