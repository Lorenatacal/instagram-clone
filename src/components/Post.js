import React from 'react';
import './Post.css';

function Post () {
    return(
        <article className="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        <img src="https://pbs.twimg.com/profile_images/767829364847370244/n2PEnyCB_400x400.jpg" alt="Lorena" />
                    </div>
                    <div className="Post-user-nickname">
                        <span>Lorena</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt="Icon Living" src="https://wallpapercave.com/wp/NGD9aMj.jpg" />
                </div>
            </div>
            <div className="Post-caption">
                <strong>Lorena</strong>In the nature!
            </div>
        </article>
    )
}

export default Post;