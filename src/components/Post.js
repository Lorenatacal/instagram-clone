import React from 'react';
import './Post.css';

function Post ({ avatar, nickname, caption, image }) {
    return(
        <article className="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src={avatar} />
                    </div>
                    <div className="Post-user-nickname">
                        <span>{nickname}</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt={caption} src={image} />
                </div>
            </div>
            <div className="Post-caption">
                <strong>{nickname}</strong>{caption}
            </div>
        </article>
    )
}

export default Post;