import { PRIORITIES } from './constants';
import * as api from '../../services/api';

export default class Notepad {
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
    console.log(note);

    return note;
  }
  saveNote(note) {
    return api.saveNote(note).then(note => {
      this._notes.push(note);
      return note;
    });
  }
  loadNotes() {
    return api.getNotes().then(notes => (this._notes = notes));
  }
  deleteNote(id) {
    return api
      .deleteNote(id)
      .then(id => (this._notes = this._notes.filter(note => note.id !== id)));
  }
  updateNoteContent(id, updatedContent) {
    return api
      .updateNote(id, updatedContent)
      .then(
        updatedNote =>
          (this._notes = this._notes.map(note =>
            note.id === updatedNote.id ? updatedNote : note,
          )),
      );
  }
  updateNotePriority(id, priority) {
    const note = this.findNoteById(id);
    if (!note) return;
    note.priority = priority;
    return note;
  }
  filterNotesByQuery(query) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const filteredNotes = [];
        for (const note of this._notes) {
          const { title, body } = note;
          const noteContent = `${title} ${body}`;
          const hasQuery = noteContent
            .toLowerCase()
            .includes(query.toLowerCase());
          if (hasQuery) {
            filteredNotes.push(note);
          }
        }
        resolve(filteredNotes);
      }, 300),
    );
  }
  filterNotesByPriority(priority) {
    const filteredNotes = this._notes.filter(
      note => note.priority === priority,
    );

    return filteredNotes;
  }
}

Notepad.PRIORITIES = PRIORITIES;
