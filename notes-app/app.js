const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// Customize yargs
yargs.version("1.1.0");

// Add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note!");
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note!");
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List notes",
  handler: function () {
    console.log("Listing all notes!");
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note!");
  },
});

// Add, remove, read, list

console.log(process.argv);
console.log(yargs.argv);
