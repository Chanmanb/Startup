import React from 'react';

export function Login() {
  return (
          <main>
            <div id="login-span" className="app">
                <span id="login-box">
                    <span id="login-text">Please Login or Sign Up or Leave!</span>
                    <span id="username">
                        <div className="login-type">Email <input id="email-input" type="text" placeholder="Email@provider.gov" /></div>
                    </span>
                    <span id="password">
                    <div className="login-type">Password <input id="email-input" type="password" placeholder = "***************" /></div>
                    </span>
                    <form id="submission-zone" method="get" action="feed.html">
                        <button type="button" className="btn btn-primary">Login</button>
                        <span></span>
                        <button type="button" className="btn btn-primary">Sign up</button>
                    </form>
                </span>
            </div>
            <hr />
        </main>
  );
}