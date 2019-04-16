import React from 'react';
import { Dropdown, Divider, Button } from "react-materialize";
import Video from '../../../../entities/Video';



const FilterButton = (props) => {
    return (
        <Dropdown open={props.isModalVisible} trigger={<Button />}>
            <p onClick={() => props.filterPosts('text')}>prva opcija</p>
            <Divider />
            <p onClick={() => props.filterPosts('image')}>drugaopcija</p>
            <Divider />
            <p onClick={() => props.filterPosts(Video.TYPE)}>drugaopcija</p>
        </Dropdown>
    )
}


export default FilterButton;



