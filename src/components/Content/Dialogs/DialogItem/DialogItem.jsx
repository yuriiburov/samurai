import React from 'react';
import { NavLink } from "react-router-dom";

const DialogItem = ({ name, url, id }) => (
  <NavLink className='user-dialog' to={id}>
    <div className='dialog'>
      <img className='dialog__img' src={url}/>
      <span className='dialog__name'>{name}</span>
    </div>
  </NavLink>
)

export default DialogItem;