import React from 'react';
import { Link } from 'react-router-dom';
import fetchPosts from './../../../services/fetchPosts';


class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    onLoadPosts() {
        fetchPosts()
            .then((fetchedPosts) => {
                this.setState({ posts: fetchedPosts });
                console.log(fetchedPosts)
            })
    }

    componentDidMount() {
        this.onLoadPosts();
    }



    render() {

        if (!this.state.length) {
            return <h2>Nothing in feed</h2>
        }
        return (
            ""
            // <PostList posts={this.state.posts} />
        );
    }
}

export default Feed;


// return (
//     if (type === 'video') {
//     return <Video />
// } else if (type === "image") {
//     return <Image />
// } else {
//     return <Text />
// }
// )
