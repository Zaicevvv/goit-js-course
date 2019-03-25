const shortid = require('shortid');
import { PRIORITIES } from './constants';

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
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        note.id = shortid.generate();
        this._notes.push(note);

        localStorage.setItem('notes', JSON.stringify(this._notes));
        resolve(note);
      }, 300),
    );
  }
  loadNotes() {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const notesToLoad = localStorage.getItem('notes');
        if (!notesToLoad) return;

        this._notes = JSON.parse(notesToLoad);

        resolve(JSON.parse(notesToLoad));
      }, 300),
    );
  }
  deleteNote(id) {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        this._notes = this._notes.filter(note => note.id !== id);
        localStorage.setItem('notes', JSON.stringify(this._notes));
        if (this._notes.length === 0) localStorage.removeItem('notes');

        resolve(this._notes);
      }, 300),
    );
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
