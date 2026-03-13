import React from 'react';

export function Page() {
    const [title_color, set_title_color] = React.useState(localStorage.getItem("title_color") || '#000000')
    // let title_color = "#000000";

    function click_title() {
        let newi = `rgb(${Math.random()*192}, ${Math.random()*255}, ${Math.random()*64})`;
        set_title_color(newi);
        localStorage.setItem("title_color", newi);

    }

    const [post_font_size, set_post_font_size] = React.useState(parseInt(localStorage.getItem('username_size')) || '15pt');
    function shrink() {
        let newi = 5 + Math.random()*25;
        set_post_font_size(newi);
        localStorage.setItem("username_size", newi);
    }

    const [float_pos, set_float_pos] = React.useState({ x: parseInt( localStorage.getItem('floaterx') ),y: parseInt(localStorage.getItem('floatery'))} || {x: 30, y: 180});
    const [drag_flt, set_drag_flt] = React.useState(false);
    function mouse_down_on_floater() {
        set_drag_flt(true);
    }
    function mouse_up_on_floater() {
        set_drag_flt(false);
        localStorage.setItem("floaterx", float_pos.x);
        localStorage.setItem("floatery", float_pos.y);
    }
    function drag_float(e) {
        if (drag_flt) {
            set_float_pos({x: e.clientX - 100, y: e.clientY - 100});
        }
    }


  return (
          <main className="app">
            <h2 style={{color: title_color, cursor: "pointer"}} onClick={click_title}>The PesterPage</h2>
              <div className="app">
                  <div id="posts-div">
                      <span className="side"></span>
                      <span id="posts-column">
                          <div className="post">
                              <span className="user" onClick={shrink} style={{fontSize: post_font_size, cursor: "pointer"}}>Bob</span>
                              <span className="post-text">I went to the beach today guys!</span>
                          </div>
                          <div style={{
                            position: "absolute",
                            left: float_pos.x, 
                            top: float_pos.y,
                            cursor: "grab",
                            userSelect: "none",
                            padding: "30px",
                            display: "flex",
                            "background-color": "#d923c0",
                            margin: "20px",
                            width: "400px",
                            }} onMouseMove={drag_float} onMouseDown={mouse_down_on_floater} onMouseUp={mouse_up_on_floater}>
                              <span className="user">Tim</span>
                              <span className="post-text">I really don't like Bob, everyone, he keeps on telling me that I'm dumb even though I know I'm not dumb, but it still hurts D:</span>
                              <div className="post-pic-div"><span></span><span><img draggable={false} className="post-pic" src="https://img.freepik.com/free-vector/sad-overweight-man-casual-clothing_1308-182471.jpg?semt=ais_hybrid&w=740&q=80" /></span><span></span></div>
                          </div>
                      </span>
                      <span className="side"></span>
                  </div>
              </div>
        </main>
  );
}