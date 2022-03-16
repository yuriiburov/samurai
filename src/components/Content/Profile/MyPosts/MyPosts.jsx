import React from 'react';
import Post from "../Post/Post";
import classes from './MyPosts.module.css';

const MyPosts = ({customStore, icon}) => {
  const postsElements = customStore.profilePage.postData.map(post =>
    <Post key={post.id} message={post.message} likes={post.likesCount} time={new Date()} icon={icon}/>);

  const newPostElement = React.createRef()
  const addPost = () => {
    const text = newPostElement.current.value;
    console.log(text);
  }

  return (
    <div className={classes.descriptionBlock}>
      <div>
        <h2 className={classes.title}>Posts</h2>
        <div className={classes.newPost}>
          <textarea ref={newPostElement} className={classes.newText} />
          <button onClick={addPost} className={classes.createPost}>Add Post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;