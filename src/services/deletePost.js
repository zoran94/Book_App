import BASE_URL from "./../shared/baseUrl";

const deletePost = (id) => {

    return fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
        headers: {
            "x-api-key": "B1tD3V",
            "Content-Type": "application/json"
        },
    }).
        then(response => {
            return response;
        })
}


export default deletePost;