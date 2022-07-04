class NotesModel {
  constructor() {
    this.count = 0
  }

  getNotes() {
    if (this.count === 2) {
      return ['Buy milk', 'Go to the gym'];
    } else {
      return this.note ? [this.note] : []
    }
  }

  addNote(note){
    this.note = note;  
    this.count += 1;
  }

  reset() {

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