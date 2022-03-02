import React from "react";

import "./style.css";

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="commentImg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" />
      </div>
      <div className="commentBody">
        <span className="userName">{props.name}</span>
        <span className="commentTime">Time</span>
        <br></br>
        <br></br>
        <span className="commentBody">{props.body}</span>
      </div>
    </div>
  );
};
export default Comment;
