import React from 'react'
import { Link } from 'react-router-dom';

const TextCard = (props) => {
    const { comments, content, id } = props.posts;
    return (
        <>
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card post-bg-color">
                        <div className="card-content">
                            <p>{content}</p>
                        </div>
                        <div className="post-info">
                            <span><i className="fas fa-file-alt"></i> Text post</span>
                            <Link to={`/post/${id}`}><span className="right"><i className="far fa-comment"></i> {comments.length} Comments</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextCard;