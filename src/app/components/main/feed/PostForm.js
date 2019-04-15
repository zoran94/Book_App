import React from "react";


const PostForm = (props) => {
    return (
        < div id="modalPost" open={this.props.isVisible} className="modal" >
            <h3>{props.postName}</h3>
            <span>Post content</span>
            <div>
                <textarea className="materialize-textarea" value={this.props.text} onChange={this.props.onChangeText}></textarea>
                <button onClick={() => this.instances[0].close()}
                    disabled={this.props.disabledText}
                    className=" btn" >Post</button>
            </div>

        </div >

    )
}