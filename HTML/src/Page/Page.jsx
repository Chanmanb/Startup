import React from 'react';

export function Page() {
    const [title_color, set_title_color] = React.useState('#000000')
    // let title_color = "#000000";

    function click_title() {
        set_title_color(`rgb(${Math.random()*192}, ${Math.random()*255}, ${Math.random()*64})`);
    }


  return (
          <main className="app">
            <h2 style={{color: title_color}} onClick={click_title}>The PesterPage</h2>
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