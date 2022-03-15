import React, { useState } from 'react';
import classes from "./ProfileInfo.module.css";

const ProfileInfo = ({ banner }) => {
  const [hideOrShow, setHideOrShow] = useState(false);

  const status = hideOrShow ? 'hide' : 'show';

  const showFullText = (bool) => {
    const desc = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facere ipsam quam. Cupiditate hic laboriosam magnam natus optio quasi, voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facere ipsam quam. Cupiditate hic laboriosam magnam natus optio quasi, voluptates! Eveniet facere ipsam quam. Cupiditate hic laboriosam magnam natus optio quasi, voluptates! llkjhgfdsaqwertyuiop;lkjhgfdxcvbnm,loiuytresdfghnbvcxsawertyuiooiuytfgbhnbvcdfghgfergviuewrgvilwerhncgowerucgiuewhgmrxhhohoirwghuiouerwhgxmiewuhgxmoegheowghxeowighxewoiugmxoiweugmxheitwughmxiwxgiweoxhwe';
    return bool
      ? `${desc}`
      : `${desc.slice(0, 200)}...`;
  }

  return (
    <>
      <div>
        <img className={classes.banner} src={banner} alt={'banner'}/>
      </div>
      <div className={classes.descriptionBlock}>
        <img src={'https://planetakino.ua/res/get-poster/00000000000000000000000000002535/1.jpg'}
             className={classes.ava} alt={'avatar'}/>
        <div className={classes.text}>
          <h1 className={classes.userName}>Elizabeth Baxters</h1>
          <p className={classes.description}>
            {showFullText(hideOrShow)}
            <span onClick={() => setHideOrShow(!hideOrShow)} className={classes.status}>{status}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;