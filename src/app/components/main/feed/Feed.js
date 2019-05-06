import React from 'react';
import { fetchPost } from '../../../../services/postService';
import FeedList from '../feed/FeedList';
import { deletePost } from "./../../../../services/postService";
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
        if (!this.state.posts.length) {
            return (
                <div className="sk-fading-circle">
                    <div className="sk-circle1 sk-circle"></div>
                    <div className="sk-circle2 sk-circle"></div>
                    <div className="sk-circle3 sk-circle"></div>
                    <div className="sk-circle4 sk-circle"></div>
                    <div className="sk-circle5 sk-circle"></div>
                    <div className="sk-circle6 sk-circle"></div>
                    <div className="sk-circle7 sk-circle"></div>
                    <div className="sk-circle8 sk-circle"></div>
                    <div className="sk-circle9 sk-circle"></div>
                    <div className="sk-circle10 sk-circle"></div>
                    <div className="sk-circle11 sk-circle"></div>
                    <div className="sk-circle12 sk-circle"></div>
                </div>)
        }

        const filteredPosts = this.state.posts.filter((post) => {
            return post.type.includes(this.state.postType);
        })
        console.log(filteredPosts)
        return (
            <>

                <FilterButton filterPosts={this.filterPosts} isModalVisible={this.state.isModalVisible} />
                <div className="padding-top" >
                    <FeedList posts={filteredPosts} className="post-container" onDeletePosts={this.onDeletePosts} />
                    <CreatePost onReload={this.onLoadPosts} />
                </div>

            </>
        );

    }
}

export default Feed;


