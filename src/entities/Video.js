class Video {
    constructor(id, userId, type, videoUrl, comments) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.videoUrl = videoUrl;
        this.comments = comments;
    }
}

export default Video;