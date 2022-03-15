import React, { useState } from 'react';
import classes from './Post.module.css';
import moment from "moment";

const Post = ({ message, likes, time }) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likes)

  const isDouble = num => num.toString().length < 2 ? `0${num}` : num;
  const wasPosted = '' + time.getFullYear() + isDouble(time.getMonth() + 1) + isDouble(isDouble(time.getDate())) +
    isDouble(time.getHours()) + isDouble(time.getMinutes());

  const isLike = bool => {
    setLike(!like);
    return bool ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
  };

  return (
    <div className={classes.post}>
      <div className={classes.postContent}>
        <img className={classes.icon} src='https://planetakino.ua/res/get-poster/00000000000000000000000000002535/1.jpg'
             alt={'icon'}/>
        <div>
          <div className={classes.postText}>{message}</div>
          <span className={classes.postTime}>{moment(wasPosted, 'YYYYMMDDHHmm').format('lll')}</span>
        </div>
        <div className={classes.postLikes}>
          {likeCount}
          <span onClick={() => isLike(like)} className={classes.postHeart}
                style={like ? { color: '#E51316' } : { color: '#E5131677' }}>♥
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;