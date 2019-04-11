import React from 'react';
import { Link } from "react-router-dom";

const SingleComment = (props) => {
    return (
        <ul className="collection">
            <li className="collection-item avatar">
                <Link to={`/user/${props.comment.userId}`}><img src={props.comment.avatarUrl} alt="" className="circle" /></Link>
                <Link to={`/user/${props.comment.userId}`}> <span className="title"><b>{props.comment.user.first}</b></span></Link>
                <p>{props.comment.body}</p>

            </li>
        </ul>

    )




}


export default SingleComment;




