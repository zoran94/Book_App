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
            open: false,
            text: "",
            imageUrl: ""
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
        this.setState(prevState => {
            return {
                open: !prevState.open
            }
        })
        createPost(body)
            .then(() => {
                this.onLoadPosts();
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
        createPost(body).then(() => {
            this.onLoadPosts()
        })
    }


    componentDidMount() {
        this.onLoadPosts();

        // {
        //     type: 'image'
        //     imageUrl: ""
        // }
        // {
        //     type: 'video'
        //     text: ""
        // }
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
                <CreatePost open={this.state.open}
                    onChangeText={this.onCreateText}
                    onPostText={this.onPostText}
                    onCreateImg={this.onCreateImg}
                    onPostImage={this.onPostImage}
                />
            </>
        );

    }
}

export default Feed;


