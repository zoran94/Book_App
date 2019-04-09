import React from 'react'
import { Link } from 'react-router-dom';

const ImageCard = (props) => {
    const { comments, type, imageUrl, id } = props.posts;
    return (
        <>
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card post-bg-color">
                        <div className="card-content white-text">
                            <img src={imageUrl} className="postImg" />
                        </div>
                        <div className="post-info">
                            <span>Image post</span>
                            <Link to={`/post/${id}`}><span className="right">{comments.length} Comments</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageCard;