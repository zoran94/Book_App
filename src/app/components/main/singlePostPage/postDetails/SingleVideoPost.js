import React from "react";
import SingleComment from "./SingleComment";

const SingleVideoPost = (props) => {

    if (!props.comments.length) {
        return (
            <>
                <div className="row">
                    <div className="col s8 offset-s2 ">
                        <div className="card post-bg-color">
                            <div className="card-content white-text center  rounded-corners">
                                <iframe width="700" height="300" src={props.post.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>

                        </div>
                    </div>
                </div>

                <form>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                            <label htmlFor="textarea2"></label>
                            <button className="right btn">Post Comment</button>
                        </div>
                    </div>
                </form>

                <h1 className="center">No comments</h1>
            </>
        )
    }
    return (
        <>
            <div className="row">
                <div className="col s8 offset-s2 ">
                    <div className="card post-bg-color">
                        <div className="card-content white-text center  rounded-corners">
                            <iframe width="700" height="300" src={props.post.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>

                    </div>
                </div>
            </div>

            <form>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                        <label htmlFor="textarea2"></label>
                        <button className="right btn">Post Comment</button>
                    </div>
                </div>
            </form>




            {
                props.comments.map(comment => {
                    return <SingleComment comment={comment} key={comment.id} />
                })
            }
        </>
    )
}

export default SingleVideoPost;