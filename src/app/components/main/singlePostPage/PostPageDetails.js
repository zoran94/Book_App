import React from "react";
import * as data from "./../../../../services/FetchSinglePost";
import SinglePostItem from "./postDetails/SinglePostItem";
class PostPageDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null,
            comments: []
        }
    }



    componentDidMount() {
        this.onLoadPosts();
        this.onLoadComments();
    }


    onLoadPosts() {
        const postId = this.props.match.params.id;
        data.fetchSinglePost(postId)
            .then(post => {
                this.setState({
                    post: post
                })
            })
    }

    onLoadComments() {
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
            <div className="padding-top">
                <SinglePostItem post={this.state.post} comments={this.state.comments} />
            </div>
        )

    }
}

export default PostPageDetails;