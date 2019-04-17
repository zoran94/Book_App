class Text {
    static TYPE = 'text';
    constructor(id, userId, type, content, comments) {
        this.id = id;
        this.userId = userId;
        this.type = type;
        this.content = content;
        this.comments = comments;
    }
}

export default Text;