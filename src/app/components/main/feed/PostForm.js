import React from "react";


const PostForm = (props) => {
    return (
        <form onSubmit={(e) => { e.preventDefault() }}>
            <div className="cursive">
                <h3>{props.postName}</h3>
                <span>Post content</span>
                <div>
                    <input className="materialize-textarea getRed" onChange={props.onCreate} value={props.value}></input>
                </div>
                <p id="errorMes"></p>
            </div>
            <div className="row"></div>
            <div>
                <button className="btn cursive" onClick={props.onPost} disabled={props.disabled}>Post</button>
                <button className="btn right cursive" onClick={props.click}>close</button>
            </div>

        </form>
    )
}



export default PostForm;