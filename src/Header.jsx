import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  constructor(props){
    super(props);
    this.sticky = this.sticky.bind(this);
  }

  componentDidMount(){
    window.addEventListener('scroll',this.sticky);
  }
  sticky(){
    let nav = document.getElementById("nav-sticky");
    console.log("hello");
    var y = window.scrollY;
    // if (y >= 200) {
    //   nav.className = "nav-wrapper sticky-hide"
    // } else {
    //   nav.className = "nav-wrapper sticky-show"
    // }
    if (y <= 250) {
      nav.className = "nav-wrapper sticky-hide"
    } else {
      nav.className = "nav-wrapper sticky-show"
    }

  }
  render(){
    return(
      <div className="header">
        <div className="name-wrapper">
          <div className='name'> ANDY </div>
          <div className='name'> THAM </div>
          <div className='tagline'> - full stack developer - </div>
        </div>
        <div id="nav-wrapper" className='nav-wrapper'>
          <div className="nav">
            <Link className="nav-link" to="/"> home </Link>
          </div>
          <div className="nav">
            <a className="nav-link" href="#test"> about </a>
          </div>
          <div className="nav">
            <a className="nav-link" href="https://github.com/andytham"> github </a>
          </div>
        </div>
        <div id="nav-sticky" className="nav-wrapper sticky-hide">
          <div className="sticky-name">
            ANDY THAM
          </div>

        </div>
      </div>
    )
  }
}
 export default Header;
