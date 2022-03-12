import React from 'react';
import './PageNotFound.css';
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className='not-found'>
      <img className='shit-picture'
           src='https://icons.iconarchive.com/icons/google/noto-emoji-smileys/512/10104-pile-of-poo-icon.png'/>
      <b>404</b>
      <span>Page not found</span>
      <Link to='/'>Back Home</Link>
    </div>
  );
};

export default PageNotFound;