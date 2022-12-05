const { Guild } = require("discord.js");

function printServerID() {
    return Guild.guild; // keyword 'return' is crucial here to send back the string when the function is called.
}

module.exports.printServerID = printServerID; // this line exports the above code so you can import it into the 'index.js' file for use.