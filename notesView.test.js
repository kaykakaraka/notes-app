/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')

describe("NotesView", () => {
  it("displays a single note", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("Buy milk");
    view.displayNotes();
    expect(document.querySelectorAll("div.note").length).toBe(1);
  });

  it("displays the notes", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("Buy milk");
    model.addNote("Got to the gym");
    view.displayNotes();
    expect(document.querySelectorAll("div.note").length).toBe(2);
  });
});