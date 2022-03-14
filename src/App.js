import React from "react";
import './App.css';
import Profile from "./components/Content/Profile/Profile";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/Content/PageNotFound/PageNotFound";
import Layout from "./Layout";

const App = ({ customStore }) => (
  <div className='app-wrapper'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Profile customStore={customStore}/>}/>
          <Route path='dialogs/*' element={<Dialogs customStore={customStore}/>}/>
          <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
  </div>
);


export default App;
