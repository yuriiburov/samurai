import React from 'react';
import Post from "../Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = ({customStore}) => {
  const postsElements = customStore.profilePage.postData.map(post => <Post key={post.id} message={post.message} like={post.likesCount}/>)

  return (
    <div className={classes.descriptionBlock}>
      <div>
        <h3>My Posts</h3>
        <div>
          <textarea />
          <br/>
          <button>Add post</button>
        </div>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;