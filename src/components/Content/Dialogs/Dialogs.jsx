import React from 'react';
import './Dialogs.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Route, Routes } from "react-router-dom";
import Select from "./Select";

const Dialogs = ({ customStore }) => {
  const dialogElements = customStore.messagesPage.dialogsData.map(user =>
    <DialogItem key={user.id} name={user.name} url={user.icon_url} id={user.id}/>);

  const messagesElements = (id) => {
    const el = customStore.messagesPage.dialogsData[id].messagesData;
    return el.map(messages =>
      <Message key={messages.id} messageData={messages}/>
    );
  }


  return (
    <div className='dialogs'>
      <div className='items'>{dialogElements}</div>
      <div className='message-field'>
        <Routes>
          {
            new Array(customStore.messagesPage.dialogsData.length).fill(null).map((el, id) =>
              <Route key={id + 1} path={`${id + 1}`} element={messagesElements(id)}/>
            )
          }
          <Route path='' element={<Select/>} />
        </Routes>
      </div>
    </div>
  )
}


export default Dialogs;

