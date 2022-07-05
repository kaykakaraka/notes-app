class NotesView {
  constructor(model) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model
  }

  displayNotes() {
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      let div = document.createElement("div");
      div.className = "note"
      div.innerText = note
      this.mainContainerEl.append(div)
    })
  }
}

module.exports = NotesView;