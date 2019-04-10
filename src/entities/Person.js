class Person {
    constructor(firstName, lastName, photo, description, postTime, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.photo = photo || 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg';
        this.description = description;
        this.postTime = postTime;
        this.id = id;

    }
}

export default Person;