import React from 'react';
import fetchPosts from '../../../../services/fetchPosts';
import FeedList from '../feed/FeedList';
import createPost from "./../../../../services/createPost";
import CreatePost from "./../feed/CreatePost";
import { Modal } from "react-materialize";
import M from "materialize-css";

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            text: "",
            imageUrl: "",
            videoUrl: "",
            isVisible: false
        }
    }


    onLoadPosts() {
        fetchPosts()
            .then((fetchedPosts) => {
                this.setState({ posts: fetchedPosts });
            })
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
                this.onLoadPosts();
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
                this.onLoadPosts();
                this.setState((prevState) => {
                    return ({
                        imageUrl: "",
                        isVisible: !prevState.isVisible
                    })
                })
            })
        } else {
            const buttImg = document.getElementById("buttImg");
            buttImg.setAttribute("className", "modal-open")
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
                this.onLoadPosts();
                this.setState({
                    videoUrl: ""
                })
            })
    }


    componentDidMount() {
        this.onLoadPosts();
    }



    render() {
        if (!this.state.posts.length) {
            return <h2>Nothing in feed</h2>
        }

        return (
            <>
                <FeedList posts={this.state.posts}
                    className="post-container"
                    onChangeText={this.onCreateText}
                />
                <CreatePost
                    open={this.state.open}
                    onChangeText={this.onCreateText}
                    onPostText={this.onPostText}
                    onCreateImg={this.onCreateImg}
                    onPostImage={this.onPostImage}
                    onInvaildImg={this.onInvaildImg}
                    onChangeVideo={this.onCreateVid}
                    onPostVideo={this.onPostVideo}
                    disabledText={!this.state.text.length}
                    disabledImage={!this.state.imageUrl.length}
                    disabledVideo={!this.state.videoUrl.length}
                    text={this.state.text}
                    imageUrl={this.state.imageUrl}
                    videoUrl={this.state.videoUrl}
                    isVisible={this.state.isVisible}
                />
            </>
        );

    }
}

export default Feed;


