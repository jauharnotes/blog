import React from "react";
import BlogPost from "./BlogPost";
import { useState, useEffect } from "react";
import axios from "axios";
import "./css/Blog-post.css";

import "./css/Blog.css";

const Blog = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //     });
  // }, []);

  useEffect(() => {
    axios.get("http://localhost:3004/post").then((res) => {
      setData(res.data);
      // console.log(res);
    });
  }, []);

  return (
    <div className="container">
      {data.map((post) => {
        return (
          <div className="wrap">
            <BlogPost key={post.id} title={post.title} body={post.body} />
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
