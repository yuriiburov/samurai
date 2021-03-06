import React, { useState } from "react";
import './App.css';
import Profile from "./components/Content/Profile/Profile";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/Content/PageNotFound/PageNotFound";
import Layout from "./Layout";

const App = () => {
  const [customStore, setCustomStore] = useState({
    profilePage: {
      profile_banner: 'https://coub-anubis-a.akamaized.net/coub_storage/background/cw_banner_image/a193121cbe9/786b6386668880d6f40fd/big_channel_1591389801_1qtv69s_1591251733_00032.jpg',
      profile_icon: 'https://planetakino.ua/res/get-poster/00000000000000000000000000002535/1.jpg',
      profile_description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dfghvleuhvliehrvliejrhbvilbhjklebvnhljebvwlfbbhjehjbgjkehkhjgejkgejhjhgejhgehjkgejhehjghjerhgerhuuygfehkuveyrvuelwrykverwygwhbvkueweukhgehfeyuworgfuyewrogfhkuewrhifkuerwytdhuerwycgnkuerwycgnxukwdhjfggekwrhgfjwlqeuribfehilraguy',
      postData: [
        { id: '1', message: 'Hi, i am working', likesCount: 3333 },
        { id: '2', message: 'Hello', likesCount: 10 },
        { id: '3', message: 'more content', likesCount: 111111111111111111111 },
        { id: '4', message: 'Bye', likesCount: 15 },
        {
          id: '5',
          message: 'NomNomNoMMMftawkuyfgkyaugfkhrfkajbvhjaefbkejhwvbfhjdvbfjhbvewhjfbviewurhbveiwurbgwbvhelwbvhewjrbgehrwbghlerbglehrwbiuwbvheiwurhbviuewbhvieuwrhgiuwkfhjbhvliuwfehbvliuewfhvliesuhvliesuhvliseubwjbhviluewheurbhvweurbhvegrhbvieruahverhvluerhgilverhgilveha',
          likesCount: 13
        },
        { id: '6', message: 'first post', likesCount: 28 },
      ],
    },
    messagesPage: {
      dialogsData: [
        {
          id: '1',
          name: 'Samanta Berchinski',
          icon_url: 'https://planetakino.ua/res/get-poster/00000000000000000000000000002535/1.jpg',
          messagesData: [
            { id: '1', message: ['Hi', 'How are your business?'], time: '3:30' },
            { id: '2', message: ['Hi, very good)'], time: '18:20' },
            { id: '3', message: ['me happy'], time: '19:20' },
            { id: '4', message: ['me too', 'very'], time: '10:00' }
          ]
        },
        {
          id: '2',
          name: 'Evgeniy',
          icon_url: 'https://www.film.ru/sites/default/files/filefield_paths/shutterstock_9669042a.jpg',
          messagesData: [
            { id: '1', message: ['Hi'], time: '18:20' },
            { id: '2', message: ['Hi'], time: '18:20' },
            { id: '3', message: ['im Evgeniy'], time: '18:20' },
            { id: '4', message: ['phphh', 'i know'], time: '18:20' },
            { id: '5', message: ['phphh', 'i know'], time: '18:20' },
            { id: '6', message: ['phphh', 'i know'], time: '18:20' },
            { id: '7', message: ['phphh', 'i know'], time: '18:20' },
            { id: '8', message: ['phphh', 'i know'], time: '18:20' },
            { id: '9', message: ['phphh', 'i know'], time: '18:20' },
            { id: '10', message: ['phphh', 'i know'], time: '18:20' },
            { id: '11', message: ['phphh', 'i know'], time: '18:20' },
            { id: '12', message: ['phphh', 'i know'], time: '18:20' },
            { id: '13', message: ['phphh', 'i know'], time: '18:20' },
            { id: '14', message: ['phphh', 'i know'], time: '18:20' },
            { id: '15', message: ['phphh', 'i know'], time: '18:20' },
            { id: '16', message: ['phphh', 'i know'], time: '18:20' },
            { id: '17', message: ['phphh', 'i know'], time: '18:20' },
            { id: '18', message: ['phphh', 'i know'], time: '18:20' },
            { id: '19', message: ['phphh', 'i know'], time: '18:20' },
            { id: '20', message: ['phphh', 'i know'], time: '18:20' },
            { id: '21', message: ['phphh', 'i know'], time: '18:20' },
            { id: '22', message: ['phphh', 'i know'], time: '18:20' },
            { id: '23', message: ['phphh', 'i know'], time: '18:20' },
            { id: '24', message: ['phphh', 'i know'], time: '18:20' }
          ]
        },
        {
          id: '3',
          name: 'Alex The Owner of a great IT kompany',
          icon_url: 'https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517',
          messagesData: [
            { id: '1', message: ['Hello'], time: '18:20' },
            { id: '2', message: ['bye'], time: '18:20' },
            { id: '3', message: ['What?'], time: '18:20' },
            { id: '4', message: [';)'], time: '18:20' }
          ]
        },
        {
          id: '4',
          name: 'Ida',
          icon_url: 'data:image/jpeg;base64,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',
          messagesData: [
            { id: '1', message: ['Will we go to walk?'], time: '18:20' },
            { id: '2', message: ['when'], time: '18:20' },
            { id: '3', message: ['tomorow'], time: '18:20' },
            { id: '4', message: ['maybe', 'ok'], time: '18:20' }
          ]
        },
        {
          id: '5',
          name: 'Mah',
          icon_url: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/02/Female_Portrait_1296x728-header-1296x729.jpg?w=1155&h=2268',
          messagesData: [
            { id: '1', message: ['How are you doing', '?'], time: '18:20' },
            { id: '2', message: ['practicing'], time: '18:20' },
            { id: '3', message: ['ouu, ok', 'and how are you doing now?'], time: '18:20' },
            { id: '4', message: ['im buzzy'], time: '18:20' }
          ]
        },
        {
          id: '6',
          name: 'Edic',
          icon_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRna0Yn_AMMEcnVGFuHNG0-UENJAFjsGKO8RQ&usqp=CAU',
          messagesData: [
            { id: '1', message: ['No'], time: '18:20' },
            { id: '2', message: ['Yes'], time: '18:20' },
            { id: '3', message: ['Are you ok?'], time: '18:20' },
            { id: '4', message: ['what?'], time: '18:20' }
          ]
        },
      ]
    }
  });

  return (
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
}

export default App;
