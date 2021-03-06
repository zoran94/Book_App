import React from 'react';
import { Dropdown, Divider, Button } from "react-materialize";


const FilterButton = (props) => {
    return (
        <span className="margin-top cursive">
            <Dropdown
                trigger={<Button ><span className="cursive">Filter posts</span></Button>}>
                <a onClick={() => props.filterPosts("")}>All posts</a>
                <Divider />
                <a onClick={() => props.filterPosts("text")}>Text posts</a>
                <Divider />
                <a onClick={() => props.filterPosts("image")}>Image posts</a>
                <Divider />
                <a onClick={() => props.filterPosts("video")}>Video posts</a>
            </Dropdown>
        </span>
    )
}


export default FilterButton;



