import React from 'react';
import classes from './Header.module.css';

const Header = (props) => (
  <header className={`${classes.header} ${props.bc}`}>
    <img src='https://t4.ftcdn.net/jpg/02/30/58/25/360_F_230582594_ds89TxI4YYbZV8POuP04YHiUKK3ZltME.jpg'/>
  </header>
);


export default Header;