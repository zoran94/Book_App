import React from "react";
import * as data from "./../../../../services/FetchSinglePost";
import fetchUser from "./../../../../services/fetchUser";

class PostPageDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null,
            comments: null,
            user: null
        }
    }



    componentDidMount() {
        const postId = this.props.match.params.id;

        data.fetchSinglePost(postId)
            .then(post => {
                this.setState({
                    post: post
                })
            })

        data.fetchComments(postId)
            .then(comments => {
                this.setState({
                    comments: comments
                })
                console.log(this.state.comments);
            })


        fetchUser(this.props.match.params.id).then(user => {
            this.setState({
                user: user
            })
            console.log(user);
        })
    }





    render() {
        return (
            <>
                <h1>bla bla</h1>
            </>
        )

    }
}

export default PostPageDetails;