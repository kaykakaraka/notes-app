const NotesModel = require('./notesModel.js');

describe('NotesModel',() => {
  it('constructs as an empty array',() => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  })

  it('adds a note and returns that when you call getNotes',() => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    expect(model.getNotes()).toEqual(['Buy milk']);
  })

  it('adds a different note and returns that when you call getNotes',() => {
    const model = new NotesModel();
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual(['Go to the gym']);
  })
})

// const model = new NotesModel();

// model.getNotes(); // should return []

// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// model.getNotes(); // should now return ['Buy milk', 'Go to the gym']

// model.reset();

// model.getNotes(); // should now return []