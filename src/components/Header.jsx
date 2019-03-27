import React from 'react';


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
    var y = window.scrollY || document.documentElement.scrollTop;
    // scrollTop is IE 8
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
            <a className="nav-link" href="/"> home </a>
          </div>
          <div className="nav">
            <a className="nav-link" href="/about"> about </a>
          </div>
          <div className="nav">
            <a className="nav-link" href="https://github.com/andytham"> github </a>
          </div>
        </div>
        <div id="nav-sticky" className="nav-sticky sticky-hide">
          <div className="sticky-name sticky">
            ANDY THAM
          </div>
              <a className="nav-link sticky" href="/"> home </a>
              <a className="nav-link sticky" href="/about"> about </a>
        </div>
      </div>
    )
  }
}
 export default Header;
