import User from "./../entities/User";

const fetchUser = (id) => {
    return fetch(`https://book-api.hypetech.xyz/v1/users/${id}?_embed[]=comments&_embed[]=posts`, {
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V"
        }
    })
        .then(response => {
            return response.json()
        })
        .then(user => {

            return new User(
                user.id,
                user.name.first,
                user.name.last,
                user.avatarUrl,
                user.about,
                user.posts, user.comments)
        })
}




export {
    fetchUser,

}
