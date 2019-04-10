import React from 'react';


const SingleUser = (props) => {
    const { description, firstName, lastName, photo, postTime } = props;
    return (
        <li className="collection-item avatar">
            <img src={photo} alt="" className="circle" />
            <span className="title"><strong>{firstName} {lastName}</strong></span>
            <p>{description}</p>
            <p className="secondary-content"><i className="material-icons">{postTime != "No posts to display" ? new Date(postTime).toLocaleDateString() : "User doesn't have posts"}</i></p>
        </li>
    )
}


export default SingleUser;