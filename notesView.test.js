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
    expect(document.querySelector("div.note").innerText).toEqual('Wash your dog');
  })
});
