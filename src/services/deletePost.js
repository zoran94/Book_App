import BASE_URL from "./../shared/baseUrl";
import {getUserToken} from './authService';
const deletePost = (id) => {

    return fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json",
            "Authorization": getUserToken()
        },
    })
    .then(response => {
            return response;
        })
}


export default deletePost;