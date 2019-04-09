import BASE_URL from '../shared/baseUrl';
import Text from '../entities/Text';
import Image from '../entities/Image';
import Video from '../entities/Video';
const POST_URL = '/posts?_embed[]=comments';



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
                const { id, userId, type, comments } = post;
                if (type === "video") {
                    return new Video(id, userId, type, post.videoUrl, comments)
                } else if (type === "image") {
                    return new Image(id, userId, type, post.imageUrl, comments);
                } else {
                    return new Text(id, userId, type, post.text, comments);
                }
            })
        })

}


export default fetchPost;