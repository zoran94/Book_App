import React from "react";
import * as data from "./../../../../services/FetchSinglePost";
import SinglePostItem from "./postDetails/SinglePostItem";
import createComment from "../../../../services/createComment";

class PostPageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      comments: [],
      commentValue: ""
    };
    this.onCreateComment = this.onCreateComment.bind(this);
    this.onChangeCommentValue = this.onChangeCommentValue.bind(this);
  }

  componentDidMount() {
    this.onLoadPosts();
    this.onLoadComments();
  }

  onLoadPosts() {
    const postId = this.props.match.params.id;
    data.fetchSinglePost(postId).then(post => {
      this.setState({
        post: post
      });
    });
  }

  onLoadComments() {
    const postId = this.props.match.params.id;
    data
      .fetchComments(postId)
      .then(comments => {
        this.setState({
          comments: comments
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  onChangeCommentValue(e) {
    this.setState({ commentValue: e.target.value });
  }

  onCreateComment() {
    const postId = this.props.match.params.id;
    createComment(this.state.commentValue, postId).then(() => {
      this.onLoadComments();
      this.setState({
        commentValue: ""
      });
    });
  }

  render() {
    if (!this.state.post) {
      return <h1>Loading ...</h1>;
    }

    return (
      <div className="padding-top">
        <SinglePostItem
          onCreateComment={this.onCreateComment}
          onChangeCommentValue={this.onChangeCommentValue}
          commentValue={this.state.commentValue}
          post={this.state.post}
          comments={this.state.comments}
          disabled={!this.state.commentValue.length}
        />
      </div>
    );
  }
}

export default PostPageDetails;
