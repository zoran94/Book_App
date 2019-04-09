import SinglePostDetails from "./../entities/SinglePostDetails";
import Comments from "./../entities/Comments";
import BASE_URL from "./../shared/baseUrl";


const fetchSinglePost = (id) => {


    return fetch(`https://book-api.hypetech.xyz/v1/posts/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then((response) => response.json())
        .then((post) => {
            const { id, userId, type, comments } = post;

            return new SinglePostDetails(id, userId, type, comments)

        })
}


const fetchComments = (postId) => {

    return fetch(`https://book-api.hypetech.xyz/v1/posts/${postId}/comments
    `, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "B1tD3V"
            }
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            return response.map(comment => {
                return new Comments(comment.userId, comment.body)
            })


        });



}



export {
    fetchSinglePost,
    fetchComments
};