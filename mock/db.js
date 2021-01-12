const system = require("./system");
const sensors = require("./sensors");
const specific = require("./specific");

module.exports = () => ({
        tests: {"tests": [system, sensors, specific]}
    }
);