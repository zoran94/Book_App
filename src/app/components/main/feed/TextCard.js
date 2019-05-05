import React from 'react';
import { Link } from 'react-router-dom';
import { fetchSinglePostComment } from './../../../../services/commentService';
import {getAuthUserId} from './../../../../services/authService';

class TextCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: []
        }
    }

    onLoadComments () {
        fetchSinglePostComment(this.props.post.id)
        .then((comments) => {
            this.setState({comments:comments})
        })
    }

    componentDidMount(){
        this.onLoadComments();
    }

    render() {
        const {content, id, userId } = this.props.post;
        return (
            <>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card post-bg-color">
                            <div className="card-content">
                                <p>{content}</p>
                            </div>
                            <div className="post-info">
                                <span><i className="fas fa-file-alt"></i> Text post</span>
                                {
                                    getAuthUserId() == userId ?
                                    <i class="fas fa-trash-alt" onClick={() => this.props.onDeletePosts(id)}></i>
                                        :
                                       ""
                                }
                                <Link to={`/post/${id}`}><span className="right"><i className="far fa-comment"></i> {this.state.comments.length} Comments</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default TextCard;