import React from 'react';

export function Friends() {
  return (
          <main className="app">
            <h2>Friends</h2>
            <h3 className="onlinicity">Online</h3>
            <div className="list-of-friends">
                <span className="friend">John</span>
                <span className="friend">Jane</span>
                <span className="friend">Tim</span>
            </div>
            <h3 className="onlinicity">Offline</h3>
            <div className="list-of-friends">
                <span className="friend">Bob</span>
            </div>
        </main>
  );
}