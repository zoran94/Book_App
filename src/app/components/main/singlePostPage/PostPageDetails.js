import React from "react";
import {fetchSinglePost} from "./../../../../services/postService";
import {fetchComments} from "./../../../../services/commentService";
import SinglePostItem from "./postDetails/SinglePostItem";
import {createComment} from "../../../../services/commentService";

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


  onLoadPosts() {
    const postId = this.props.match.params.id;
    fetchSinglePost(postId).then(post => {
      this.setState({
        post: post
      });
    });
  }

  onChangeCommentValue(e) {
    this.setState({ commentValue: e.target.value });
  }

  onLoadComments() {
    const postId = this.props.match.params.id;
    fetchComments(postId)
      .then(comments => {
        this.setState({
          comments: comments
        });
      })
      .catch(error => {
        console.log(error);
      });
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



  componentDidMount() {
    this.onLoadPosts();
    this.onLoadComments();
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
