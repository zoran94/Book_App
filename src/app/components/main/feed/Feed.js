import React from 'react';
import fetchPosts from '../../../../services/fetchPosts';
import FeedList from '../feed/FeedList';
import createPost from "./../../../../services/createPost";
import CreatePost from "./../feed/CreatePost";


class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    onLoadPosts = () => {
        fetchPosts()
            .then((fetchedPosts) => {
                this.setState({ posts: fetchedPosts });
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
                    onReload={this.onLoadPosts} />
            </>
        );

    }
}

export default Feed;


