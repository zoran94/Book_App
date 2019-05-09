class Image {
    static TYPE = 'image';
    constructor(id, userId, type, imageUrl, comments, avatarUrl) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.imageUrl = imageUrl;
        this.comments = comments;
        this.avatarUrl = avatarUrl;
    }
}

export default Image;