import React from 'react'
import { Link } from 'react-router-dom';

const ImageCard = (props) => {
    const { comments, imageUrl, id } = props.posts;
    return (
        <>
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card post-bg-color">
                        <div className="card-style white-text">
                            <img alt="post-descr" src={imageUrl} className="postImg" />
                        </div>
                        <div className="post-info">
                            <span><i className="fas fa-image"></i> Image post</span>
                            <Link to={`/post/${id}`}><span className="right"><i className="far fa-comment"></i> {comments.length} Comments</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageCard;