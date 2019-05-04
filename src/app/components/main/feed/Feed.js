import React from 'react';
import {fetchPost} from '../../../../services/postService';
import FeedList from '../feed/FeedList';
import deletePost from "./../../../../services/deletePost";
import CreatePost from "./../feed/CreatePost";
import FilterButton from "./FilterButton";


class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            postType: ""    
        }
    }


    filterPosts = (postType) => {
        this.setState({
            postType: postType
        })
    }



    onLoadPosts = () => {
        fetchPost()
            .then((fetchedPosts) => {
                this.setState({ posts: fetchedPosts });
                console.log(this.state.posts);
            })
    }

    onDeletePosts = (id) => {
        deletePost(id)
        this.onLoadPosts();
    }



    componentDidMount() {
        this.onLoadPosts();
    }

    render() {

        console.log(this.state.posts);
        if (!this.state.posts.length) {
            return <h2>Nothing in feed</h2>
        }

        const filteredPosts = this.state.posts.filter((post) => {
            return post.type.includes(this.state.postType);
        })

        return (
            <>
            <FeedList posts={this.state.posts} className="post-container" onDeletePosts={this.onDeletePosts} />
                <FilterButton filterPosts={this.filterPosts} isModalVisible={this.state.isModalVisible} />
                <div className="padding-top" >
                    <FeedList posts={filteredPosts} className="post-container"/>
                    <CreatePost onReload={this.onLoadPosts} />
                </div>

            </>
        );

    }
}

export default Feed;


