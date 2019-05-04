import React from 'react';
import { Dropdown, Divider, Button } from "react-materialize";
import Video from '../../../../entities/Video';
import Text from '../../../../entities/Text';
import Image from '../../../../entities/Image';

const FilterButton = (props) => {
    return (
        <span className="margin-top">
            <Dropdown
                trigger={<Button >Filter posts</Button>}>
                <a onClick={() => props.filterPosts("")}>All posts</a>
                <Divider />
                <a onClick={() => props.filterPosts(Text.TYPE)}>Text posts</a>
                <Divider />
                <a onClick={() => props.filterPosts(Image.TYPE)}>Image posts</a>
                <Divider />
                <a onClick={() => props.filterPosts(Video.TYPE)}>Video posts</a>
            </Dropdown>
        </span>
    )
}


export default FilterButton;



