import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Contactus from './components/pages/Contactus';
import News from './components/pages/News';
import About from './components/pages/About';
import Notfound from './components/pages/Notfound';
import Nav from './components/Nav';
import './Style.css';
import logo from '../src/img/LOGO2.png';
import Timer from './components/pages/Timer';
import ChangeName from './components/pages/ChangeName';
import Test from './components/pages/Test';
import { Link } from 'react-router-dom';
import Vezba from './components/pages/Vezba';
import Axiosvezba from './components/pages/Axiosvezba';
import Mapp from './components/pages/Mapp';
import Users from './components/pages/Users';
import Userlink from './components/pages/Userlink';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='all'>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='contact' element={<Contactus />} />
          <Route path='news' element={<News />} />
          <Route path='about' element={<About />} />
          <Route path='timer' element={<Timer />} />
          <Route path='change' element={<ChangeName />} />
          <Route path='test' element={<Test />} />
          <Route path='vezba' element={<Vezba/>}/>
          <Route path='axi'element={<Axiosvezba/>}/>
          <Route path='users'element={<Users/>}/>
          <Route path='userlink/:id'element={<Userlink/>}/>
          <Route path='*' element={<Notfound />} />
        
      <Route path='map'element={<Mapp/>}/>

        </Routes>
        {/* <Link to="/test">test</Link> */}
      </BrowserRouter>

      <div className='footer'>
        <img src={logo} className="logo1" />
        <h4>Copyright © 2022 ^</h4>
      </div></div>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
