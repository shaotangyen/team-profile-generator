const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email", () => {
            const engineer = new Engineer("Beta", "01", "beta@gmail.com", "shaotangyen");

            expect(engineer.name).toEqual("Beta");
            expect(engineer.id).toEqual("01");
            expect(engineer.email).toEqual("beta@gmail.com");
            expect(engineer.githubURL).toEqual("https://github.com/shaotangyen");
            expect(engineer.role).toEqual("Engineer");
        });

        //test calling funtions
        it("Shuold return engineer's github ID", () => {
            expect(new Engineer("Beta", "01", "beta@gmail.com", "shaotangyen").getGithubId()).toEqual("shaotangyen");
        });

        it("Shuold return engineer's github URL", () => {
            expect(new Engineer("Beta", "01", "beta@gmail.com", "shaotangyen").getGithub()).toEqual("https://github.com/shaotangyen");
        });

        it("Shuold return engineer's role", () => {
            expect(new Engineer("Beta", "01", "beta@gmail.com", "shaotangyen").getRole()).toEqual("Engineer");
        });

    });

});