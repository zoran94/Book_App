class Image {
    constructor(id, userId, type, imageUrl, comments) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.imageUrl = imageUrl;
        this.comments = comments;
    }
}

export default Image;