import User from "./../entities/User";

const fetchUser = (id) => {
    return fetch(`https://book-api.hypetech.xyz/v1/users/${id}`)
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
                user.posts, user.comments

            )
        })
}

export default fetchUser;