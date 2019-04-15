import React, { Component } from "react";
import M from "materialize-css";

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }

    componentDidMount() {
        const createModals = document.querySelectorAll(".modal");
        const instances = M.Modal.init(createModals)


        const actionButton = document.querySelectorAll('.fixed-action-btn');
        const instancesOfActionButton = M.FloatingActionButton.init(actionButton, {
            direction: "top",

        });

    }



    render() {

        return (
            <>
                <div className="fixed-action-btn plus">
                    <a className="btn-floating btn-large red">+
                        <i className="large material-icons"></i>
                    </a>
                    <ul>
                        <li><a className="btn-floating #68b6f4 modal-trigger" data-target="modalPost"><i className="material-icons"></i></a></li>
                        <li><a className="btn-floating green darken-1 modal-trigger" data-target="modalImage" ><i className="material-icons"></i></a></li>
                        <li><a className="btn-floating red modal-trigger" data-target="modalVideo" ><i className="material-icons"></i></a></li>
                    </ul>
                </div>


                <div id="modalPost" className="modal">
                    <h3>New post</h3>
                    <span>Post content</span>
                    <div>
                        <textarea className="materialize-textarea" value={this.props.text} onChange={this.props.onChangeText}></textarea>
                        <button onClick={this.props.onPostText}
                            disabled={this.props.disabledText}
                            className="modal-close btn" >Post</button>
                    </div>

                </div>

                <div id="modalImage" className="modal">
                    <h3>New image post</h3>
                    <span>Post image url</span>
                    <div>
                        <input type="text" value={this.props.imageUrl} onChange={this.props.onCreateImg} />
                        <p id="errorMes"></p>
                    </div>
                    <br />
                    <button id="buttImg" onClick={this.props.onPostImage}
                        disabled={this.props.disabledImage}
                        className="modal-close btn" >Post</button>

                </div>

                <div id="modalVideo" className="modal">
                    <h3>New video post</h3>
                    <span>YouTube video link</span>
                    <div>
                        <input type="text" value={this.props.videoUrl} onChange={this.props.onChangeVideo} />
                        <button onClick={this.props.onPostVideo}
                            disabled={this.props.disabledVideo}
                            className="modal-close btn">Post</button>
                    </div>
                </div>

            </>

        )



    }

}

export default CreatePost;