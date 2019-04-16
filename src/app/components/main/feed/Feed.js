import React from 'react';
import fetchPosts from '../../../../services/fetchPosts';
import FeedList from '../feed/FeedList';
import CreatePost from "./../feed/CreatePost";
import FilterButton from "./FilterButton";


class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isModalVisible: false,
            postType: ""
        }
    }


    filterPosts = (postType) => {
        console.log(postType);

        this.setState((prevState) => {
            return {
                isModalVisible: !prevState.isModalVisible,
                postType: postType
            }
        })
    }



    onLoadPosts = () => {
        fetchPosts()
            .then((fetchedPosts) => {
                this.setState({ posts: fetchedPosts });
                console.log(this.state.posts)
            })
    }

    componentDidMount() {
        this.onLoadPosts();
    }

    render() {
        if (!this.state.posts.length) {
            return <h2>Nothing in feed</h2>
        }
        const filteredPosts = this.state.posts.filter((post) => {
            return post.type.includes(this.state.postType);
        }
        )

        return (
            <div className="padding-top" >
                <FilterButton filterPosts={this.filterPosts} isModalVisible={this.state.isModalVisible} />
                <FeedList posts={filteredPosts}
                    className="post-container"
                />

                <CreatePost
                    onReload={this.onLoadPosts} />
            </div>
        );

    }
}

export default Feed;


