import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const handleClick = () => {
    setIdFromButtonClick(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={handleClick}>
        Fetch data
      </button>
      <p>{post.title}</p>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
