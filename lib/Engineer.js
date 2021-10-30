const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, githubURL) {
        super(name, id, email);
        this.githubURL = githubURL;
        this.role = "Engineer";
    }

    getGithub() {
        return this.githubURL;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Engineer;