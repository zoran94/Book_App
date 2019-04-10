import React from "react";
import SingleComment from "./SingleComment";

const SingleImagePost = (props) => {
    if (!props.comments.length) {
        return (
            <>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card post-bg-color">
                            <div className="card-content white-text">
                                <img alt="post-desc" src={props.post.imageUrl} className="postImg" />
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
                <div className="col s8 offset-s2">
                    <div className="card post-bg-color">
                        <div className="card-content white-text">
                            <img alt="post-desc" src={props.post.imageUrl} className="postImg" />
                        </div>
                    </div>
                </div>
            </div>
            <form>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea placeholder="write something" id="textarea2" className="materialize-textarea" data-length="120" ></textarea>
                        <label htmlFor="textarea2"></label>
                        <button className="right btn">Post Comment</button>
                    </div>
                </div>
            </form>
            {props.comments.map(comment => {
                return <SingleComment comment={comment} />
            })}
        </>
    )
}

export default SingleImagePost;