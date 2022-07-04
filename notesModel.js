class NotesModel {
  constructor() {
    this.notes = []
  }

  getNotes() {
    return this.notes;
  }

  addNote(note){
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }
}

module.exports = NotesModel;

// const model = new NotesModel();

// model.getNotes(); // should return []

// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []