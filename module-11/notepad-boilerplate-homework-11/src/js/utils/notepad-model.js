export default class Notepad {
  static generateUniqueId() {
    const uniqueId =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);

    return uniqueId;
  }

  static getPriorityName(priorityId) {
    return Notepad.PRIORITIES[priorityId].name;
  }

  constructor(notes = []) {
    this._notes = notes;
  }
  get notes() {
    return this._notes;
  }
  findNoteById(id) {
    const note = this._notes.find(note => note.id === id);

    return note;
  }
  saveNote(note) {
    note.id = Notepad.generateUniqueId();
    this._notes.push(note);
    return note;
  }
  deleteNote(id) {
    this._notes = this._notes.filter(note => note.id !== id);
  }
  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    if (!note) return;
    const keys = Object.keys(updatedContent);
    for (const key of keys) {
      note[key] = updatedContent[key];
    }
    return note;
  }
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    if (!note) return;
    note.priority = priority;
    return note;
  }
  filterNotesByQuery(query) {
    const filteredNotes = [];
    for (const note of this._notes) {
      const { title, body } = note;
      const noteContent = `${title} ${body}`;
      const hasQuery = noteContent.toLowerCase().includes(query.toLowerCase());
      if (hasQuery) {
        filteredNotes.push(note);
      }
    }
    return filteredNotes;
  }
  filterNotesByPriority(priority) {
    const filteredNotes = this._notes.filter(
      note => note.priority === priority,
    );

    return filteredNotes;
  }
}

// Статическое свойство
Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};
