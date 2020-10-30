import React, { Component } from 'react';
import './InstagramDMs.css';
import dmListJson from './Aaddya_InstaDMs.json';
import InstagramDMItem from './InstagramDMItem';

class InstagramDMHistory extends Component {

    constructor() {
      super();
      this.state = {
          messagesList: [],
          loggedInAs: '', // default
      }
    }

    render() {

      let messagesList = this.state.messagesList.map((message, key) => {
        return (
          <InstagramDMItem key={key} message={message} loggedInAs={this.state.loggedInAs} />
        )
      });

      return (
        <div className="InstagramDMList">
          {/* <input className="InstagramDMListSearchInput" type="text" placeholder="Search"
                onChange={(e) => {
                  console.log(e.target.value);
                  this.search(e.target.value);
                }} /> */}
          <div className="messagesContainer">
            {messagesList}
          </div>
        </div>
      );
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({loggedInAs: this.props.loggedInAs, messagesList: dmListJson.conversation.reverse()});
      }, 1000);
      // console.log(dmListJson);
    }
}
  
export default InstagramDMHistory;


