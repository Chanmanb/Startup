import React from 'react';

export function About() {
  return (
        <main className="app">
            <h2>What is this?</h2>
            <div id="summary-div">
                <span className="summary-margin"></span>
                <span id="summary"> This is PesterPage, a fun little thought experiment about what a social media would look like if you got to modify your friends' pages in small, mostly inconvenient ways. It's ment to be fun, and then annoying, and then you give up or something. Maybe you come back and fix your page after everyone else has left too, and then your page would be intact.</span>
                <span className="summary-margin"></span>
            </div>
            <p></p>
        </main>
  );
}