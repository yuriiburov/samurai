import React from "react";

const Message = ({ messageData }) => (
  <div className={`message-side ${messageData.id % 2 === 0 ? 'my-side' : 'another-side'}`}>
    {messageData.message.map((message, id) =>
      <p key={id} className={`message`}>{message}</p>)}
    <span className={'time'}>{messageData.time}</span>
  </div>
)

export default Message;