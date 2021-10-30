const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email", () => {
            const employee = new Employee("Beta", "01", "beta@gmail.com");

            expect(employee.name).toEqual("Beta");
            expect(employee.id).toEqual("01");
            expect(employee.email).toEqual("beta@gmail.com");
            expect(employee.role).toEqual("Employee");
        });

        //test calling funtions
        it("Shuold return employee's name", () => {
            expect(new Employee("Beta", "01", "beta@gmail.com").getName()).toEqual("Beta");
        });

        it("Shuold return employee's ID", () => {
            expect(new Employee("Beta", "01", "beta@gmail.com").getId()).toEqual("01");
        });

        it("Shuold return employee's Email", () => {
            expect(new Employee("Beta", "01", "beta@gmail.com").getEmail()).toEqual("beta@gmail.com");
        });

        it("Shuold return employee's Role", () => {
            expect(new Employee("Beta", "01", "beta@gmail.com").getRole()).toEqual("Employee");
        });
    });

});