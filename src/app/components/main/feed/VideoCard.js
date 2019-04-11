import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = (props) => {


    const { comments, videoUrl, id } = props.posts;

    return (
        <>
            <div className="row">
                <div className="col s8 offset-s2 ">
                    <div className="card post-bg-color">
                        <div className="card-style white-text center">
                            <iframe width="100%" height="300" src={videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className="post-info">
                            <span className=""><i className="fas fa-video"></i> Video post</span>
                            <Link to={`/post/${id}`}><span className="right"><i className="far fa-comment"></i> {comments.length} Comments</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}

export default VideoCard;