import React, { Component } from 'react';
import './InstagramDMs.css';
import dmListJson1 from './Aaddya_InstaDMs.json';
import dmListJson2 from './Aaddya_InstaDMs_2.json';
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
        <div className="InstagramDMListContainer">
          <button
            className={this.state.partToShow == 1 ? "InstagramDMListButtonActive" : "InstagramDMListButtonInactive"}
            onClick={() => {
              console.log(dmListJson1.conversation[0]);
              this.setState({ partToShow: 1, messagesList: [...dmListJson1.conversation].reverse() });
            }}>Part 1</button>
          <button
            className={this.state.partToShow == 2 ? "InstagramDMListButtonActive" : "InstagramDMListButtonInactive"}
            onClick={() => {
              console.log(dmListJson2.conversation[0]);
              this.setState({ partToShow: 2, messagesList: [...dmListJson2.conversation].reverse() });
            }}>Part 2</button>
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
        </div>
      );
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({loggedInAs: this.props.loggedInAs, partToShow: 1, messagesList: [...dmListJson1.conversation].reverse()});
      }, 1000);
      // console.log(dmListJson);
    }
}
  
export default InstagramDMHistory;


