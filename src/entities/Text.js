class Text {
    static TYPE = 'text';
    constructor(id, userId, type, content, comments, avatarUrl) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.content = content;
        this.comments = comments;
        this.avatarUrl = avatarUrl;
    }
}

export default Text;