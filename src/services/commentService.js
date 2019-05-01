import BASE_URL from './../shared/baseUrl'
import Comment from "./../entities/Comment";
import {getUserToken} from './../services/authService';
import {getAuthUserId} from './../services/authService';

const fetchComments = (postId) => {

    return fetch(`${BASE_URL}/comments?postId=${postId}&_expand=user`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V",
            'Authorization': getUserToken()
        }
    })
        .then((response) => response.json())
        .then((response) => {
            return response.map(comment => {
                console.log(response);
                if(!!comment.user){
                return new Comment(comment.userId, comment.body, comment.user.name.first, comment.user.avatarUrl, comment.id)
            }
                return new Comment (comment.userId, comment.body, "Anonymus", 'http://via.placeholder.com/125', comment.id )
            })
            
        });

}

const createComment = (commentText, postId) => {

    const apiComment = {
        postId: postId,
        userId: getAuthUserId(),
        body: commentText,
        isPublic: true
    }

    return fetch(`${BASE_URL}/comments`, {
        method: 'POST',
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json",
            'Authorization': getUserToken(),
        },
        body: JSON.stringify(apiComment)
    })

}
export {fetchComments,
        createComment
        }