import React from 'react';
import classes from './Post.module.css';

const Post = (props) => (
  <div className={classes.post}>
    <img className={classes.icon} src='https://planetakino.ua/res/get-poster/00000000000000000000000000002535/1.jpg'/>
    {props.message}
    <div>{`${props.like} likes`}</div>
  </div>
);


export default Post;