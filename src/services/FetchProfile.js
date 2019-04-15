import User from "./../entities/User";
import BASE_URL from './../shared/baseUrl';


const fetchUser = (id) => {
    return fetch(`${BASE_URL}/users/${id}?_embed[]=comments&_embed[]=posts`, {
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


const editProfile = (id, fullName, imageUrl, bio) => {

    const updateObject = {
        avatarUrl: imageUrl,
        name: {
            first: fullName,
        },
        about: {
            bio: bio,
        }
    }

    return fetch(`${BASE_URL}/users/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "B1tD3V"
        },
        body: JSON.stringify(updateObject)
    })
        .then(response => {
            return response.json()
        })
}


export {
    fetchUser,
    editProfile
}

