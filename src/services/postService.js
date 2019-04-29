import BASE_URL from "./../shared/baseUrl";
import Text from '../entities/Text';
import Image from '../entities/Image';
import Video from '../entities/Video';
import {getUserToken} from './authService';

const POST_URL = '/posts?_embed[]=comments';


const createPost = (body) => {
    return fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json",
            'Authorization': getUserToken()
        },
        body: JSON.stringify(body)
    })
}





const fetchPost = () => {
    return fetch(`${BASE_URL}${POST_URL}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
            'Authorization': getUserToken()
        }

    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            return response.map((post) => {
                const { id, userId, type, comments } = post;
                if (type === "video") {
                    return new Video(id, userId, type, post.videoUrl, comments)
                } else if (type === "image") {
                    return new Image(id, userId, type, post.imageUrl, comments);
                } else {
                    return new Text(id, userId, type, post.text, comments);
                }
            }).reverse()
        })

}

const fetchSinglePost = (id) => {


    return fetch(`${BASE_URL}/posts/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
            'Authorization': getUserToken()
        }
    })
        .then((response) => response.json())
        .then((post) => {

            const { id, userId, type } = post;
            if (type === "video") {
                return new Video(id, userId, type, post.videoUrl)
            } else if (type === "image") {
                return new Image(id, userId, type, post.imageUrl);
            } else {
                return new Text(id, userId, type, post.text);
            }

        })
}

export {createPost,
        fetchPost,
        fetchSinglePost
        }