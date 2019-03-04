import Notyf from 'notyf';
import noteMarkup from '../../templates/note-markup.hbs';
import { NOTIFICATION_MESSAGES } from './constants';

const notyf = new Notyf();

export const getRefs = () => {
  return {
    noteList: document.querySelector('.note-list'),
    submitForm: document.querySelector('form.note-editor'),
    searchForm: document.querySelector('form.search-form'),
    modalOpen: document.querySelector('[data-action="open-editor"]'),
    modalSave: document.querySelector('[form="note-editor-form"]'),
  };
};

export const addListItem = (listRef, note) => {
  const listItem = noteMarkup(note);
  listRef.insertAdjacentHTML('beforeend', listItem);
  notyf.confirm(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
};

export const renderNoteList = (listRef, notes) => {
  listRef.innerHTML = '';
  notes.map(note => listRef.insertAdjacentHTML('beforeend', note));
};
