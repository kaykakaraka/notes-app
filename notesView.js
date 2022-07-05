class NotesView {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    let div = document.createElement("div");
    div.className = "note";
    this.mainContainerEl.append(div);
  }
}

module.exports = NotesView;