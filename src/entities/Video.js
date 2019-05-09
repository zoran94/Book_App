class Video {
    static TYPE = 'video';
    constructor(id, userId, type, videoUrl, comments, avatarUrl) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.videoUrl = videoUrl;
        this.comments = comments;
        this.avatarUrl = avatarUrl;
    }
}

export default Video;