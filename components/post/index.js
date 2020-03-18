import React from "react";
import ReactMarkdown from "react-markdown";
import style from "./style.scss";
import input from "raw-loader!../../README.md";

const Post = () => (
    <div className={style.postContainer}>
        <div className={style.post}>
            <ReactMarkdown source={input} />
        </div>
    </div>
);

export default Post;
