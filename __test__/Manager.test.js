const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email", () => {
            const manager = new Manager("Beta", "01", "beta@gmail.com", "001");

            expect(manager.name).toEqual("Beta");
            expect(manager.id).toEqual("01");
            expect(manager.email).toEqual("beta@gmail.com");
            expect(manager.officeNum).toEqual("001");
            expect(manager.role).toEqual("Manager");
            
        });

        //test calling funtions
        it("Shuold return manager's role", () => {
            expect(new Manager("Beta", "01", "beta@gmail.com", "001").getRole()).toEqual("Manager");
        });

    });

});