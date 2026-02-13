import React from 'react';

export function Feed() {
  return (
          <main className="app">
            <h2>You're Feed</h2>
              <div className="app">
                  <div id="posts-div">
                      <span className="side"></span>
                      <span id="posts-column">
                          <div className="post">
                              <span className="user">Bob</span>
                              <span className="post-text">I went to the beach today guys!</span>
                          </div>
                          <div className="post">
                              <span className="user">Tim</span>
                              <span className="post-text">I really don't like Bob, everyone, he keeps on telling me that I'm dumb even though I know I'm not dumb, but it still hurts D:</span>
                              <div className="post-pic-div"><span></span><span><img className="post-pic" src="https://img.freepik.com/free-vector/sad-overweight-man-casual-clothing_1308-182471.jpg?semt=ais_hybrid&w=740&q=80" /></span><span></span></div>
                          </div>
                      </span>
                      <span className="side"></span>
                  </div>
              </div>
        </main>
  );
}