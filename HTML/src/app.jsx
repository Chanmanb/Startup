import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { Login } from './login/login';
import { Friends } from './friends/friends';
import { Feed } from './feed/feed';
import { About } from './about/about';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

export default function App() {
  return <BrowserRouter>
  <div className="page"><header>
            <div><h1 id="Site-name">PesterPage</h1></div>
            <nav id="navigator-nav">
                <div id="navigator">
                    <div className="nav-option"><NavLink to="/">Home</NavLink></div>
                    <div className="nav-option"><NavLink to="feed">Feed</NavLink></div>
                    <div className="nav-option"><NavLink to="friends">Freinds</NavLink></div>
                    <div className="nav-option"><NavLink to="about">About</NavLink></div>
                </div>
            </nav>
        </header>

        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/Feed' element={<Feed />} exact />
            <Route path='/Friends' element={<Friends />} exact />
            <Route path='/About' element={<About />} exact />
            <Route path='*' element={<NotFound />} exact />
        </Routes>

        <footer className="app">
            <span id="sellout">
                <div id="sellout-kid">
                <div className="sellout-section">Chandler Brown</div>
                <div className="sellout-section" id="git"><a href="https://github.com/Chanmanb?tab=repositories" />Github account (please subscribe)</div>
                </div>
            </span>
        </footer></div>
</BrowserRouter>;
}

function NotFound () {
    return <main>404: Return to sender; Address not found D:</main>;
}