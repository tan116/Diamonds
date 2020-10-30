import React, { Component } from 'react';
import './App.css';
import questionMark from './assets/question.png';
import diamond from './assets/diamond.png';
import cross from './assets/close.png';

// import img2 from './assets/IMG_5370.PNG';
import InstagramDMHistory from './InstagramDMHistory';
// import img3 from './assets/IMG_5338.PNG';
// import img4 from './assetsIMG_3291.JPG';
// import img5 from './assets/IMG_4612.JPG';
// import img6 from './assets/IMG_5060.jpg';
// import img7 from './assets/IMG_5193.PNG';
// import img8 from './assets/IMG_5285.PNG';
// import img9 from './assets/IMG_5324.PNG';
// import img10 from './assets/IMG_5337.PNG';
import img12 from './assets/IMG_0486.JPG';
// import img13 from './assets/IMG_0484.JPG';
// import img14 from './assets/FDC1901A-99F9-4028-8932-E06AF1DBA4F1.JPG';
// import img15 from './assets/7556375B-278E-47B0-A9EC-D1A13CC126BD.JPG';
import img16 from './assets/40173EAC-4A28-4FA3-B2B5-6B6E9B1EB361.JPG';
// import img17 from './assets/191D4B28-905A-4A47-83F2-3D0E88889711.JPG';
// import img18 from './assets/64d46cab31c241bb9e7e5fe52e3cd850.MOV';
// import img19 from './assets/50FA99D8-DE95-464F-9827-86407BA1D67F.JPG';
// import img20 from './assets/2e02cb9b6c2c4b49b7817f490b9fb2fc.MOV';
// import img21 from './assets/03FCC12F-08EE-4666-A428-69FE3FC7F41A.JPG';
// import img22 from './assets/5b63a1ed508d46b484f68568ac98a7c5.MOV';
// import img23 from './assets/28b68ed6aa4e43fda5c34e3ede6297e3.MOV';
// import img24 from './assets/45AEDC9A-CDE6-4F22-9285-D9D50A7EA872.JPG';

class Aaddya extends Component {

    constructor() {
      super();
      this.state = {
        //logged out
        isLoggedIn: false,
        username: '',
        //logged in (for testing)
        // isLoggedIn: true,
        // username: 'tanaysharda',
      }
    }
  
    login() {
      if( (this.state.username == 'tanaysharda' || this.state.username == 'aaddyakunchal') 
          && this.state.password == 'lifetime' ) {
            this.setState({isLoggedIn: true});
          }
    }

    render() {
        return (
        <div className="Aaddya">
            

            { this.state.isLoggedIn ?
              <InstagramDMHistory loggedInAs={this.state.username} />
              :
              <div className="loginFormContainer">
                <div className="loginBackgroundImageContainer">
                  <img className="loginBackgroundImage" src={img16} alt="questionMark"/>
                </div>
                <img className="loginFormImage" src={img12} alt="that-escalated-fast"/>

                <form className="loginForm">
                  <input className="loginFormInput" type="text" placeholder="Username"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          this.setState({username: e.target.value});
                        }} />
                  <input className="loginFormInput" type="password" placeholder="Password"
                        onChange={(e) => {
                          // console.log(e.target.value);
                          this.setState({password: e.target.value});
                        }} />
                  <button type="submit"
                          className="loginFormButton"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            this.login();
                          }}>
                    Login
                  </button>
                </form>
              </div>
            }
        </div>
        );
    }

    componentDidMount() {
        
    }
  }
  
  export default Aaddya;


