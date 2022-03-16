import React, { PureComponent } from 'react';
import classes from "../../Profile/MyPosts/MyPosts.module.css";

class SendMessage extends PureComponent {
  state = {
    heightArea: 42,
    textValue: ''
  }

  resizeHandler = (e) => {
    this.state.textValue === ''
      ? this.setState({ heightArea: 42 })
      : this.setState({ heightArea: e.target.scrollHeight });
    console.log(this.state.heightArea);
  }

  currentTextValue = (e) => {
    this.setState({ textValue: e.target.value })
  }

  render() {
    return (
      <div className={'send-message'}>
        <textarea onKeyUp={this.resizeHandler} value={this.state.textValue} onChange={this.currentTextValue}
                  className={`${classes.newText} send-text`}
                  style={{ height: `${this.state.heightArea}px` }}/>
        <button className={`${classes.createPost} send-btn`}>Add Post</button>
      </div>
    );
  }
}

export default SendMessage;