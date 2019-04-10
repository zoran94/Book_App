import React from "react";
import * as data from "./../../../../services/FetchSinglePost";
import SinglePostItem from "./postDetails/SinglePostItem";
class PostPageDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null,
            comments: [],
            user: null
        }
    }



    componentDidMount() {
        this.onLoadPosts();
        this.onLoadComments();
    }


    onLoadComments() {
        const postId = this.props.match.params.id;
        data.fetchSinglePost(postId)
            .then(post => {
                this.setState({
                    post: post
                })
            })
    }

    onLoadPosts() {
        const postId = this.props.match.params.id;
        data.fetchComments(postId)
            .then(comments => {
                this.setState({
                    comments: comments
                })
            })
            .catch(error => {
                console.log(error);
            })
    }



    render() {
        if ((!this.state.post)) {
            return <h1>Loading ...</h1>
        }

        return (
            <>
                <SinglePostItem post={this.state.post} comments={this.state.comments} />
            </>
        )

    }
}

export default PostPageDetails;