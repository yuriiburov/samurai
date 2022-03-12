import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Outlet} from 'react-router-dom'
import Header from "./components/Header/Header";

const Layout = () => (
    <>
      <Header bc={'box'}/>
      <Navbar bc={'box'}/>
      <div className='box'>
        <Outlet/>
      </div>
    </>
  );


export default Layout;