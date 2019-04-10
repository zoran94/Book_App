import React from "react";
import SingleVideoPost from "./SingleVideoPost";
import SingleImagePost from "./SingleImagePost";
import SingleTextPost from "./SingleTextPost";

const SinglePostItem = (props) => {

    if (props.post.type === 'video') {
        return <SingleVideoPost post={props.post} comments={props.comments} />
    } else if (props.post.type === "image") {
        return <SingleImagePost post={props.post} comments={props.comments} />
    } else {
        return <SingleTextPost post={props.post} comments={props.comments} />
    }
}

export default SinglePostItem;