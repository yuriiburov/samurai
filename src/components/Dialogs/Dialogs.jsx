import React from 'react';
import './Dialogs.css'
import { dialogsData, messagesData } from "../../utils";
import DialogItem from "../Profile/DialogItem/DialogItem";
import Message from "../Profile/Message/Message";

const Dialogs = () => (
  <div className='dialogs'>
    <div className='items'>
      <DialogItem name={dialogsData[0].name} url={dialogsData[0].icon_url} id={dialogsData[0].id}/>
      <DialogItem name={dialogsData[1].name} url={dialogsData[1].icon_url} id={dialogsData[1].id}/>
      <DialogItem name={dialogsData[2].name} url={dialogsData[2].icon_url} id={dialogsData[2].id}/>
      <DialogItem name={dialogsData[3].name} url={dialogsData[3].icon_url} id={dialogsData[3].id}/>
      <DialogItem name={dialogsData[4].name} url={dialogsData[4].icon_url} id={dialogsData[4].id}/>
      <DialogItem name={dialogsData[5].name} url={dialogsData[5].icon_url} id={dialogsData[5].id}/>
    </div>
    <div className='messages'>
      <Message message={messagesData[0].message}/>
      <Message message={messagesData[1].message}/>
      <Message message={messagesData[2].message}/>
    </div>
  </div>
);


export default Dialogs;

