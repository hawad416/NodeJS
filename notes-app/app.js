const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

//customize yargs version
yargs.version("1.1.0");

//add, remove, read, list notes
//create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },

    body: {
      describe: "Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove comman

yargs.command({
  command: "remove",
  describe: "remove a note",

  builder: {
    title: {
      describe: "note remove title",
      demandOption: true,
      type: "string",
    },
  },

  handler: function (argv) {
    // console.log("Removing a note");
    const oldNotes = fs.readFileSync("notes.json");

    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing notes",

  handler(argv) {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "reading notes",
  builder: {
    title: {
      describe: "title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
