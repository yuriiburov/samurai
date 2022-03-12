import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Layout from "./Layout";

const App = () => (
  <div className='app-wrapper'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Profile/>}/>
          <Route path='dialogs' element={<Dialogs/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
  </div>
);


export default App;
