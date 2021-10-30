const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email", () => {
            const intern = new Intern("Beta", "01", "beta@gmail.com", "VUW");

            expect(intern.name).toEqual("Beta");
            expect(intern.id).toEqual("01");
            expect(intern.email).toEqual("beta@gmail.com");
            expect(intern.school).toEqual("VUW");
            expect(intern.role).toEqual("Intern");
        });

        //test calling funtions
        it("Shuold return engineer's role", () => {
            expect(new Intern("Beta", "01", "beta@gmail.com", "VUW").getRole()).toEqual("Intern");
        });
        it("Shuold return engineer's school", () => {
            expect(new Intern("Beta", "01", "beta@gmail.com", "VUW").getSchool()).toEqual("VUW");
        });
    });

});