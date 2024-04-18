const { error } = require("console");
const fs = require("fs");
fs.readFile("./welcome.txt", (error, data) => {
    error? console.log(error) :console.log(data.toString());
});
