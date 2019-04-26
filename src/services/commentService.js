import BASE_URL from './../shared/baseUrl'
import Comments from "./../entities/Comments";


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

const createComment = (commentText, postId) => {

    const apiComment = {
        postId: postId,
        userId: 1, //ovo bi trebalo da se obrise kad predjemo sa dev servera
        body: commentText
    }

    return fetch(`${BASE_URL}/comments`, {
        method: 'POST',
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(apiComment)
    })

}
export {fetchComments,
        createComment
        }