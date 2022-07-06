/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel');
const { isSymbolObject } = require('util/types');

describe("NotesView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    this.model = new NotesModel();
    this.view = new NotesView(this.model);
  });

  it("displays a single note", () => {
    this.model.addNote("Buy milk");
    this.view.displayNotes();
    expect(document.querySelectorAll("div.note").length).toBe(1);
  });

  it("displays the notes", () => {
    this.model.addNote("Buy milk");
    this.model.addNote("Got to the gym");
    this.view.displayNotes();
    expect(document.querySelectorAll("div.note").length).toBe(2);
  });

  it("allows a user to add a note", () => {
    let inputField = document.querySelector('#note-input');
    let addButton = document.querySelector('#add-note');
    inputField.value = 'Wash your dog';
    addButton.click();
    expect(document.querySelectorAll("div.note").length).toBe(1);
  })
});

// You'll need to:

// Add a new text input and button to the web page.
// Test-drive and implement the JS code that allows the user to input a new note title, click the button, and see the new note displayed on the page.
// you should set an event listener in the NotesView constructor.
// the model's addNote method should be called to save the new note on the model.
// you should use the displayNotes method to reflect these changes on the page.
