import BASE_URL from '../shared/baseUrl';


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

export default createComment;