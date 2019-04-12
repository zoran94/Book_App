import BASE_URL from "./../shared/baseUrl";

const createPost = (body) => {


    return fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

}

export default createPost;