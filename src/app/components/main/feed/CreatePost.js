import React, { Component } from "react";
import M from "materialize-css";
import { Modal } from "react-materialize";

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: true,
            postType: 'text'
        }

        this.instances = [];
    }

    componentDidMount() {
        const createModals = document.querySelectorAll(".modal");
        this.instances = M.Modal.init(createModals)
        console.log(this.instances);

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
                        <li><a className="btn-floating #68b6f4 modal-trigger" data-target="modalPost"><i className="material-icons fa fa-text-width"></i></a></li>
                        <li><a className="btn-floating green darken-1 modal-trigger" data-target="modalImage" ><i className="material-icons fa fa-image"></i></a></li>
                        <li><a className="btn-floating red modal-trigger" data-target="modalVideo" ><i className="material-icons fa fa-video"></i></a></li>
                    </ul>
                </div>

                <Modal open={""}>
                    {this.state.postType === 'text' && <PostForm postName="Text Post" />}
                    {postType === 'imageUrl' && <PostForm postName="Image Post" />}
                    {postType === 'videoUrl' && <PostForm postName="Video Post" />}
                </Modal>


                <div id="modalPost" open={this.props.isVisible} className="modal">
                    <h3>New text post</h3>
                    <span>Post content</span>
                    <div>
                        <textarea className="materialize-textarea" value={this.props.text} onChange={this.props.onChangeText}></textarea>
                        <button onClick={() => this.instances[0].close()}
                            disabled={this.props.disabledText}
                            className=" btn" >Post</button>
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
                        className=" btn" >Post</button>

                </div>

                <div id="modalVideo" className="modal">
                    <h3>New video post</h3>
                    <span>YouTube video link</span>
                    <div>
                        <input type="text" value={this.props.videoUrl} onChange={this.props.onChangeVideo} />
                        <button onClick={this.props.onPostVideo}
                            disabled={this.props.disabledVideo}
                            className=" btn">Post</button>
                    </div>
                </div>

            </>

        )



    }

}

export default CreatePost;