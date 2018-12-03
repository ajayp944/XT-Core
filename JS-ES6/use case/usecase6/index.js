class Profile {
    constructor(id, name, city) {
        this.id = id
        this.name = name;
        this.city = city;
    }
}

class ProfileService {
    constructor() {
        this.serviceUrl = 'http://localhost:3000/profile';
    }

    async save(profile) {
        const p = await fetch(this.serviceUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(profile)
        })
         if (response.status == '404') {
            throw { err: '404 ! No Result Found.' }
        }
        else {
            return response.json();

        }
    }

    async findAll() {
        const response = await fetch(this.serviceUrl);
        return response.json();
    }
    async findById(id) {
        const response = await fetch(`${this.serviceUrl}?id=${id}`);
        if (response.status == '404') {
            throw { err: '404 ! No Result Found.' }
        }
        else {
            return response.json();

        }
    }

    async removeById(id) {
        const response = await fetch(`${this.serviceUrl}/${id}`, {
            method: 'DELETE'
        });
        if (response.status == '404') {
            throw { err: '404 ! No Result Found.' }
        }
        else {
            return response.json();
        }
    }
    async update(profile) {
        const response = await fetch(`${this.serviceUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(profile),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status == '404') {
            throw { err: '404 ! No Result Found.' }
        }
        else {
            return response.json();
        }

    }
}

class ProfileComponent {
    constructor(profileService) {
        this.profileService = profileService;
    }
    findAllProfiles() {
        this.profileService.findAll()
            .then(res => console.log(res))
            .catch((err) => { console.log(`Error in finding all profile ->  ${err.err}`) });
    }

    saveProfile(id, name, city) {
        const profile = new Profile(id, name, city);
        this.profileService.save(profile)
            .then(res => console.log(res))
            .catch((err) => { console.log(`Error in saving profile ->  ${err.err}`) });
    }
    findProfileById(id) {
        this.profileService.findById(id)
            .then((res) => console.log(res))
    }
    removeProfileById(id) {
        this.profileService.removeById(id)
            .then((res) => console.log(res))
            .catch((err) => { console.log(`Error in removing profile ->  ${err.err}`) });
    }
    updateProfile(id, name, city) {
        const profile = new Profile(id, name, city);
        this.profileService.update(profile)
            .then(res => console.log(res))
            .catch((err) => { console.log(`Error in updating profile ->  ${err.err}`) });
    }
}

const profile = new ProfileComponent(new ProfileService());