import React from 'react';
import PropTypes from "prop-types";

import "./Post.scss"

const Post = ({post}) => {
    return (
        <div className="app-post">
            <span className="app-post__title">{post.title}</span>
            <span className="app-post__body">{post.body}</span>
        </div>
    )
}

Post.propTypes = {
    userId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
}

export default Post
