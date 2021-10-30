const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, githubId) {
        super(name, id, email);
        this.githubId = githubId;
        this.githubURL = "https://github.com/" + githubId;
        this.role = "Engineer";
    }

    getGithubId() {
        return this.githubId;
    }

    getGithub() {
        return this.githubURL;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;