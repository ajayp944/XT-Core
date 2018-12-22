class Profile {
    constructor(name = 'Default', city = 'Gurgaon', id = Math.floor(Math.random() * 10 + 1), ) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}

module.exports = Profile;