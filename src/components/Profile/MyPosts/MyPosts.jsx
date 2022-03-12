import React from 'react';
import Post from "../Post/Post";
import classes from './MyPosts.module.css';
import { postData } from "../../../utils";

const MyPosts = () => {
  return (
    <div className={classes.descriptionBlock}>
      <div>
        <h3>My Posts</h3>
        <div>
          <textarea></textarea>
          <br/>
          <button>Add post</button>
        </div>
      </div>
      <div>
        <Post message={postData[0].message} like={postData[0].likesCount}/>
        <Post message={postData[1].message} like={postData[1].likesCount}/>
      </div>
    </div>
  );
};

export default MyPosts;