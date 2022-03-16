import React, { useState } from 'react';
import classes from './Post.module.css';
import moment from "moment";

const Post = ({ message, likes, time, icon }) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(likes)

  const isDouble = num => num.toString().length < 2 ? `0${num}` : num;
  const wasPosted = '' + time.getFullYear() + isDouble(time.getMonth() + 1) + isDouble(isDouble(time.getDate())) +
    isDouble(time.getHours()) + isDouble(time.getMinutes());

  const isLike = bool => {
    setLike(!like);
    return bool ? setLikeCount(likeCount - 1) : setLikeCount(likeCount + 1);
  };

  const format_number = (num) => {
    const strNumber = parseInt(num).toString();
    const len = strNumber.length;
    if (len <= 3) {
      return strNumber;
    }
    const isDevideThree = len % 3;
    return isDevideThree > 0
      ? strNumber.slice(0, isDevideThree) + "," + strNumber.slice(isDevideThree, len).match(/\d{3}/g).join(",")
      : strNumber.slice(isDevideThree, len).match(/\d{3}/g).join(",");
  }

  return (
    <div className={classes.post}>
      <div className={classes.postContent}>
        <img className={classes.icon} src={icon}
             alt={'icon'}/>
        <div>
          <div className={classes.postText}>{message}</div>
          <span className={classes.postTime}>{moment(wasPosted, 'YYYYMMDDHHmm').format('lll')}</span>
        </div>
        <div className={classes.postLikes}>
          {format_number(likeCount)}
          <span onClick={() => isLike(like)} className={classes.postHeart}
                style={like ? { color: '#E51316' } : { color: '#E5131677' }}>♥
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;