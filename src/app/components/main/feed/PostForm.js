import React from "react";


const PostForm = (props) => {
    return (
        <form onSubmit={(e) =>{e.preventDefault()}}>
        <div >
            <h3>{props.postName}</h3>
            <span>Post content</span>
            <div>
                <input className="materialize-textarea" onCreateText={props.onCreateText}></input>
                <button className=" btn" onPostText={props.onPostText}>Post</button>
            </div>

        </div>
</form>
    )
}



export default PostForm;