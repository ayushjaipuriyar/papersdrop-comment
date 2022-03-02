import React, { useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";

import "./style.css";

const Comments = () => {
  const [comments, setComments] = React.useState(null);
  const baseURL = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setComments(response.data);
    });
  }, []);

  if (!comments) return null;
  let numberOfComments = comments.slice(0, 5).length;
  return (
    <div className="mainBody">
      <span className="number">{numberOfComments} Comments</span>
      <ul>
        {comments.slice(0, 5).map((comment) => (
          <li key={comment.id}>
            <Comment name={comment.name} body={comment.body} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Comments;
