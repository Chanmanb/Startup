import React from 'react';

export function Page() {
    const [title_color, set_title_color] = React.useState('#000000')
    // let title_color = "#000000";

    function click_title() {
        set_title_color(`rgb(${Math.random()*192}, ${Math.random()*255}, ${Math.random()*64})`);
    }

    const [post_font_size, set_post_font_size] = React.useState('15pt');
    function shrink() {
        set_post_font_size(5 + Math.random()*25)
    }

    const [float_pos, set_float_pos] = React.useState({x: 30, y: 30});
    const [drag_flt, set_drag_flt] = React.useState(false);
    function mouse_down_on_floater() {
        set_drag_flt(true);
    }
    function mouse_up_on_floater() {
        set_drag_flt(false);
    }
    function drag_float(e) {
        if (drag_flt) {
            set_float_pos({x: e.clientX - 50, y: e.clientY - 50});
        }
    }


  return (
          <main className="app">
            <h2 style={{color: title_color}} onClick={click_title}>The PesterPage</h2>
              <div className="app">
                  <div id="posts-div">
                      <span className="side"></span>
                      <span id="posts-column">
                          <div className="post">
                              <span className="user" onClick={shrink} style={{fontSize: post_font_size}}>Bob</span>
                              <span className="post-text">I went to the beach today guys!</span>
                          </div>
                          <div className="post" style={{
                            position: "absolute",
                            left: float_pos.x, 
                            top: float_pos.y,
                            cursor: "grab",
                            userSelect: "none"
                            }} onMouseMove={drag_float} onMouseDown={mouse_down_on_floater} onMouseUp={mouse_up_on_floater}>
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