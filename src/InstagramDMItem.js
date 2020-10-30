import React, { Component } from 'react';
import './InstagramDMs.css';
import dmListJson from './Aaddya_InstaDMs.json';

class InstagramDMItem extends Component {

    constructor() {
      super();
      this.state = {
        showDateTime: false,
      }
    }
  
    isMessageOnlyEmojis(str) {
      const ranges = [
        '\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]',
        ' ', // Also allow spaces
      ].join('|');
      
      const removeEmoji = str => str.replace(new RegExp(ranges, 'g'), '');
      
      const isOnlyEmojis = !removeEmoji(str).length;
      return isOnlyEmojis;
    }

    getTimeFromDate(messageDate) {
      var date = new Date(messageDate); 
      // console.log(date.toISOString().split("T")[0])
      return date.toISOString().split("T")[0] + ', ' + date.toISOString().split("T")[1].split(".")[0].substr(0,5);
    }

    renderDateTime() {
      return (
        <div className={this.props.message.sender == this.props.loggedInAs ? 'messageDateTimeRight' : 'messageDateTimeLeft'}>
          {this.getTimeFromDate(this.props.message.created_at)}
        </div>
      )
    }

    render() {

        if (this.props.message.text != undefined) {
          if(!this.isMessageOnlyEmojis(this.props.message.text))
            return ( // message is not all emojis
              <div className={'messageItem'} onClick={() => {
                this.setState({showDateTime: true})
              }}>
                <div className={this.props.message.sender == this.props.loggedInAs ? 'messageRight' : 'messageLeft'}>
                  <div className={'messageText'}>
                    {this.props.message.text}
                  </div>
                  { this.props.message.likes != undefined && this.props.message.likes.length > 0 && 
                      <div className={'messageLike'}>❤️ {this.props.message.likes.length > 1 ? this.props.message.likes.length : ''}</div>
                  }
                </div>
                {this.state.showDateTime && this.renderDateTime()}
              </div>
            );
          else
            return ( // message is only emojis, so show in larger font
              <div className={'messageItem'} onClick={() => {
                this.setState({showDateTime: true})
              }}>
                <div className={this.props.message.sender == this.props.loggedInAs ? 'messageRight' : 'messageLeft'}>
                  <div className={'messageTextBigEmojis'}>
                    {this.props.message.text}
                  </div>
                  { this.props.message.likes != undefined && this.props.message.likes.length > 0 && 
                      <div className={'messageLike'}>❤️ {this.props.message.likes.length > 1 ? this.props.message.likes.length : ''}</div>
                  }
                </div>
                {this.state.showDateTime && this.renderDateTime()}
              </div>
            );
        } else if (this.props.message.media != undefined) {
          return (
            <div className={'messageItem'} onClick={() => {
              this.setState({showDateTime: true})
            }}>
              <div className={this.props.message.sender == this.props.loggedInAs ? 'messageRight' : 'messageLeft'}>
                <img className={'media'} src={this.props.message.media} />
                {/* onclick media should open image in full */}
              </div>
              {this.state.showDateTime && this.renderDateTime()}
            </div>
          )
        }
        else return null;
        // also handle "animated_media_images", "media_url", "media_share_url", "video_call_action"
        // also add time (on hover or something)
    }

    componentDidMount() {
      
    }
  }
  
  export default InstagramDMItem;


