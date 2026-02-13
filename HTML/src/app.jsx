import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div><header>
            <div><h1 id="Site-name">PesterPage</h1></div>
            <nav id="navigator-nav">
                <div id="navigator">
                    <div className="nav-option"><a href="index.html">Home</a></div>
                    <div className="nav-option"><a href="feed.html">Feed</a></div>
                    <div className="nav-option"><a href="friends.html">Freinds</a></div>
                    <div className="nav-option"><a href="about.html">About</a></div>
                </div>
            </nav>
        </header>

        <main>This is where appdata goes</main>

        <footer>
            <span id="sellout">
                <div id="sellout-kid">
                <div className="sellout-section">Chandler Brown</div>
                <div className="sellout-section" id="git"><a href="https://github.com/Chanmanb?tab=repositories" />Github account (please subscribe)</div>
                </div>
            </span>
        </footer></div>;
}