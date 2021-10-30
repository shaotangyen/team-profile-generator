class Employee {
    constructor(name, id, email) {
      // If a character is not a number or a letter, make it visible right away
      // Save the underlying character
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    }
  
    getName() {
        return this.name;
    }
  
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
  
  }
  
  module.exports = Employee;
  