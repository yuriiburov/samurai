import React from 'react';
import Post from "../Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = ({customStore}) => {
  const postsElements = customStore.profilePage.postData.map(post =>
    <Post key={post.id} message={post.message} likes={post.likesCount} time={new Date()}/>)

  return (
    <div className={classes.descriptionBlock}>
      <div>
        <h2 className={classes.title}>Posts</h2>
        <div className={classes.newPost}>
          <textarea className={classes.newText} />
          <button className={classes.createPost}>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;