import React, { Component } from "react";
import createPost from "./../../../../services/createPost";
//import fetchPosts from "./../../../../services/fetchPosts";
import M from "materialize-css";
import { Modal } from "react-materialize";
import PostForm from "./../feed/PostForm";

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: true,
            postType: 'text' || "imageUrl" || "videoUrl",
            text: "",
            imageUrl: "",
            videoUrl: "",
            modalVisible: false
        }
        
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


    onCreateText = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onPostText = () => {
        const body = {
            type: 'text',
            text: this.state.text,

        }
        createPost(body)
            .then(() => {
                this.setState({
                    text: ""
                })
            })
    }

    onCreateImg = (e) => {
        this.setState({ imageUrl: e.target.value })
    }

    
    onPostImage = () => {
        const body = {
            type: "image",
            imageUrl: this.state.imageUrl
        }
        const err = document.getElementById("errorMes");

        if (this.state.imageUrl.slice(0, 5) === "https") {
            err.textContent = ""
            createPost(body).then(() => {
                this.setState((prevState) => {
                    return ({
                        imageUrl: "",
                    })
                })
            })
        } else {
            err.textContent = "image must be valid url"
            err.style.color = "red"
        }
    }
    onCreateVid = (e) => {
        this.setState({ videoUrl: e.target.value })

    }
    

    
    onPostVideo = () => {
        const body = {
            type: "video",
            videoUrl: this.state.videoUrl
        }
        createPost(body)
            .then(() => {
                this.setState({
                    videoUrl: ""
                })
            })
    }

    modalToggle =() =>{
        this.setState((prevState) => {
          return {
            modalVisible: !prevState.modalVisible
          }
        })
      }

      
      
      render() {

        return (
            <>
                <div className="fixed-action-btn plus">
                    <a className="btn-floating btn-large red">+
                        <i className="large material-icons"></i>
                    </a>
                    <ul>
                        <li><a className="btn-floating #68b6f4" ><i className="material-icons fa fa-text-width"></i></a></li>
                        <li><a className="btn-floating green darken-1"  onClick={this.state.proptypes === "imageUrl" ? this.modalToggle : ""}><i className="material-icons fa fa-image"></i></a></li>
                        <li><a className="btn-floating red "><i className="material-icons fa fa-video"></i></a></li>
                    </ul>
                </div>


                <Modal open={this.state.modalVisible}>
            {this.state.postType === 'text' && <PostForm postName="Text Post" onPostText={this.onPostText} onCreateText={this.onCreateText} />}
            {this.state.postType === 'imageUrl' && <PostForm postName="Image Post" />}
            {this.state.postType === 'videoUrl' && <PostForm postName="Video Post" />}
        </Modal>
    
            </>

        )



    }

}

export default CreatePost;