import BASE_URL from '../shared/baseUrl';
import Post from './../entities/Post';
const POST_URL = '/posts';



const fetchPost = () => {
    return fetch(`${BASE_URL}${POST_URL}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V"
        }

    })
        .then((response) => response.json())
        .then((response) => {
            return response.map((post) => {
                const { id, userId, type } = post;
                if (type === "video") {
                    return new Post(id, userId, type, post.videoUrl)
                } else if (type === "image") {
                    return new Post(id, userId, type, post.imageUrl);
                } else {
                    return new Post(id, userId, type, post.text);
                }
            })
        })

}


export default fetchPost;