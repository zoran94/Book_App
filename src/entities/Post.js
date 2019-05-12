class Post {
    
    constructor({id, userId, type, videoUrl = false, imageUrl = false, text = false, comments, user = false}) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.content = videoUrl || imageUrl || text;
        this.comments = comments;
        this.avatarUrl = user.avatarUrl || "";
    }
}

export default Post;