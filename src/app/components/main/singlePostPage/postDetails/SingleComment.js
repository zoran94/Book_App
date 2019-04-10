import React from 'react';

const SingleComment = (props) => {

    return (

        <ul className="collection">
            <li className="collection-item avatar">
                <img src={props.comment.avatarUrl} alt="" className="circle" />
                <span className="title"><b>{props.comment.user.first}</b></span>
                <p>{props.comment.body}</p>

            </li>
        </ul>

    )




}


export default SingleComment;




