import React from 'react'
import { Link } from 'react-router-dom';
import { fetchSinglePostComment } from './../../../../services/commentService';

class ImageCard extends React.Component{
    constructor(props){
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
    
    render () {
        const { imageUrl, id } = this.props.post;
        
        return (
            <>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="card post-bg-color">
                            <div className="card-style white-text">
                                <img alt="post-descr" src={imageUrl} className="postImg" />
                            </div>
                            <div className="post-info">
                                <span><i className="fas fa-image"></i> Image post</span>
                                <button className="btn" onClick={() => this.props.onDeletePosts(id)}>delete</button>
                                <Link to={`/post/${id}`}><span className="right"><i className="far fa-comment"></i> {this.state.comments.length} Comments</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ImageCard;