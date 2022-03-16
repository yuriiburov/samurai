import React, { useState } from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = ({ banner, icon, desc }) => {
  const [hideOrShow, setHideOrShow] = useState(false);

  const status = hideOrShow ? 'hide' : 'show';

  const showFullText = (bool) => {
    if (bool) {
      return `${desc}`;
    }
    return !bool && desc.length < 200 ? `${desc}` : `${desc.slice(0, 200)}...`;
  }

  return (
    <>
      <div>
        <img className={classes.banner} src={banner} alt={'banner'}/>
      </div>
      <div className={classes.descriptionBlock}>
        <img src={icon}
             className={classes.ava} alt={'avatar'}/>
        <div className={classes.text}>
          <h1 className={classes.userName}>Elizabeth Baxters</h1>
          <p className={classes.description}>
            {showFullText(hideOrShow)}
            {desc.length >= 200 &&
              <span onClick={() => setHideOrShow(!hideOrShow)} className={classes.status}>{status}</span>}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;