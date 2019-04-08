class User {
    constructor(id, firstname, lastname, avatarUrl, about, posts, comments) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.avatarUrl = avatarUrl;
        this.about = about;
        this.posts = posts;
        this.comments = comments;
    }
}

export default User;