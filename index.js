const fs = require('fs');
const inquirer = require('inquirer');
// const util = require('util');
// const writeFileAsync = util.promisify(fs.writeFile);
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const templateStart = require("./src/templateStart");
const templateEnd = require("./src/templateEnd");
const templateManager = require("./src/templateManager");
const templateEngineer = require("./src/templateEngineer");
const templateIntern = require("./src/templateIntern");

// List of questions to ask the user and gather their input using inquirer
const promptManagerInfo = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'manager_name',
                message: 'What is team manager\'s name?',
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'What is team manager\'s ID?',
            },
            {
                type: 'input',
                name: 'manager_email',
                message: 'What is team manager\'s Email?',
            },
            {
                type: 'input',
                name: 'office_num',
                message: 'What is the office number?',
            }
        ])
        .then((val) => {
            fs.appendFileSync('./dist/index.html', templateManager(
                new Manager(val.manager_name, val.manager_id, val.manager_email, val.office_num)
            ));
            promptMenu();
        })
        .catch((err) => console.error(err));
}

const promptEngineerInfo = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineer_name',
                message: 'What is engineer\'s name?',
            },
            {
                type: 'input',
                name: 'engineer_id',
                message: 'What is engineer\'s ID?',
            },
            {
                type: 'input',
                name: 'engineer_email',
                message: 'What is engineer\'s Email?',
            },
            {
                type: 'input',
                name: 'engineer_github_id',
                message: 'What is engineer\'s Github ID?',
            }
        ])
        .then((val) => {
            fs.appendFileSync('./dist/index.html', templateEngineer(new Engineer(val.engineer_name,
                val.engineer_id, val.engineer_email, val.engineer_github_id)));
            promptMenu();
        })
        .catch((err) => console.error(err));
}

const promptInternInfo = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'intern_name',
                message: 'What is intern\'s name?',
            },
            {
                type: 'input',
                name: 'intern_id',
                message: 'What is intern\'s ID?',
            },
            {
                type: 'input',
                name: 'intern_email',
                message: 'What is intern\'s Email?',
            },
            {
                type: 'input',
                name: 'intern_school',
                message: 'What is intern\'s School?',
            }
        ])
        .then((val) => {
            fs.appendFileSync('./dist/index.html', templateIntern(new Intern(val.intern_name,
                val.intern_id, val.intern_email, val.intern_school)));
            promptMenu();
        })
        .catch((err) => console.error(err));
}

const promptMenu = () => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'menu',
                message: 'What do you want to do?',
                choices: ['1) To add an engineer member', '2) To add an intern member', '3) Exit'],
                default: "To add Engineer",
            }
        ])
        .then(val => {
            if (val.menu === "1) To add an engineer member") {
                console.log("=== Adding an Engineer ===");
                promptEngineerInfo();
            } else if (val.menu === "2) To add an intern member") {
                console.log("=== Adding an Intern ===");
                promptInternInfo();
            } else if (val.menu === "3) Exit") {
                fs.appendFileSync('./dist/index.html', templateEnd());
                console.log("=== END ===");
                process.exit(0);
            }
        })
        .catch((err) => console.error(err));
}

function int() {
    fs.appendFileSync('./dist/index.html', templateStart());
    console.log("=== Adding a Manager ===");
    promptManagerInfo();
}

int();