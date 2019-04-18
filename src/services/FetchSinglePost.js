import BASE_URL from './../shared/baseUrl'
import Comments from "./../entities/Comments";
import Video from '../entities/Video';
import Text from '../entities/Text';
import Image from '../entities/Image';

const fetchSinglePost = (id) => {


    return fetch(`${BASE_URL}/posts/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V"
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


const fetchComments = (postId) => {

    return fetch(`${BASE_URL}/comments?postId=${postId}&_expand=user`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then((response) => response.json())
        .then((response) => {
            return response.map(comment => {
                return new Comments(comment.userId, comment.body, comment.user.name, comment.user.avatarUrl, comment.id)
            })

        });

}



export {
    fetchSinglePost,
    fetchComments
};