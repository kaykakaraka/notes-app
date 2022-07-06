class NotesView {
  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButton = document.querySelector('#add-note');
    this.model = model
    
    this.addNoteButton.addEventListener('click',() => {
      this.model.addNote(document.querySelector('#note-input').value);
      console.log(this.model.getNotes());
      this.displayNotes();
    })
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      console.log(note);
      let div = document.createElement("div");
      div.className = "note"
      div.innerText = note
      this.mainContainerEl.append(div)
    })
    console.log(document.querySelectorAll("div.note").innerText);
  }
}

module.exports = NotesView;