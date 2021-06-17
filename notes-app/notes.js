const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return notes;
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  debugger;
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.bgGreen("notes added"));
  } else {
    console.log(chalk.bgRed("note title taken"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen("Note Removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed("No note found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();

  if (notes.length < 1) return;

  console.log(chalk.inverse("Your Notes:"));
  notes.forEach((note) => {
    console.log(`${note.title}: ${note.body}`);
  });
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log(chalk.inverse(`${note.title}:`), note.body);
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
