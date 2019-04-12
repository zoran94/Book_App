import React from "react";
import { Modal } from "react-materialize";
import M from "materialize-css";

const CreatePost = (props) => {

    const triggerText = <i className="fa fa-circle post"></i>
    const triggerImage = <i className="fa fa-circle image"></i>
    const triggerVideo = <i className="fa fa-circle video"></i>

    return (
        <>
            <Modal open={props.open} trigger={triggerText}>
                <h3>New post</h3>
                <span>Post content</span>
                <div>
                    <textarea className="materialize-textarea" onChange={props.onChangeText}></textarea>
                    <button className="btn" onClick={props.onPostText}>Post</button>
                </div>

            </Modal>
            <Modal trigger={triggerImage}>
                <h3>New image post</h3>
                <span>Post image url</span>
                <div>
                    <input type="text" onChange={props.onCreateImg} />
                </div>
                <br />
                <button className="btn" onClick={props.onPostImage} >Post</button>

            </Modal>

            <Modal trigger={triggerVideo}>
                <h3>New video post</h3>
                <span>YouTube video link</span>
                <div>
                    <input type="text" />
                    <button className="btn">Post</button>
                </div>
            </Modal>

            <i className="fa fa-plus-circle plus"></i>
        </>
    )
}

export default CreatePost;