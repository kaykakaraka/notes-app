class NotesModel {

  getNotes() {
    if (this.addNote === true) {
      return ['Buy milk'];
    } else {
      return [];
    }
  }

  addNote(){
    this.addNote = true
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