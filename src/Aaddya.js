import React, { Component } from 'react';
import './App.css';
import questionMark from './assets/question.png';
import diamond from './assets/diamond.png';
import cross from './assets/close.png';

import InstagramDMHistory from './InstagramDMHistory';
import img12 from './assets/IMG_0486.JPG';
import img16 from './assets/40173EAC-4A28-4FA3-B2B5-6B6E9B1EB361.JPG';

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


