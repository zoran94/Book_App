import BASE_URL from './../shared/baseUrl';
import Person from '../entities/Person';

const USERS_URL = '/users/?_embed=posts'

const fetchUsers = () => {
    return fetch(`${BASE_URL}${USERS_URL}`,
        {
            headers: {
                "Content-Type": "application/ json",
                "x-api-key": "B1tD3V"
            }
        }).then(response => response.json())
        .then(response => response.map((user) => {
            const { about, name, posts, avatarUrl, id } = user;
            const lastPost = posts[posts.length - 1] ? posts[posts.length - 1].createdAt : "No posts to display";
            return new Person(name.first, name.last, avatarUrl, about.bio, lastPost, id)
        })
        )



}

export default fetchUsers;