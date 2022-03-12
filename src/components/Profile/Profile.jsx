import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => (
  <main className={`${ classes.content }`}>
    <ProfileInfo banner='https://montegrappa.com.ua/wp-content/uploads/2019/03/Samurai-Banner.png'/>
    <MyPosts/>
  </main>
);


export default Profile;