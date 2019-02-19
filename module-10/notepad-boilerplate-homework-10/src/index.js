import Notepad from './js/utils/notepad-model';
import initialNotes from './assets/notes.json';
import {
  PRIORITY_TYPES,
  /*  ICON_TYPES, */ NOTE_ACTIONS,
} from './js/utils/constants';
import {
  getRefs,
  addListItem,
  // createNoteContent,
  // createNoteFooter,
  // createActionButton,
  // createListItem,
  renderNoteList,
} from './js/utils/view';
import './sass/main.scss';

const notepad = new Notepad(initialNotes);

const refs = getRefs();

renderNoteList(refs.noteList, initialNotes);

const handleSubmitForm = e => {
  e.preventDefault();

  const [title, body] = e.target.elements;
  if (!title.value || !body.value) {
    alert('Необходимо заполнить все поля!');
    return;
  }

  const createNote = {
    title: title.value,
    body: body.value,
    priority: PRIORITY_TYPES.LOW,
  };

  const listItem = notepad.saveNote(createNote);
  addListItem(refs.noteList, listItem);

  refs.submitForm.reset();
};

// Delete note
const removeListItem = el => {
  const ParentNodeToRemove = el.closest('.note-list__item');
  const id = ParentNodeToRemove.dataset.id;

  notepad.deleteNote(id);
  ParentNodeToRemove.remove();
};

const handleListItemBtnClick = ({ target }) => {
  if (target.parentNode.nodeName !== 'BUTTON') return;

  const action = target.parentNode.dataset.action;

  switch (action) {
    case NOTE_ACTIONS.DELETE:
      alert('Заметка удалена!');
      removeListItem(target);
      break;

    case NOTE_ACTIONS.EDIT:
      console.log('EDIT');
      break;

    case NOTE_ACTIONS.INCREASE_PRIORITY:
      console.log('INCREASE_PRIORITY');
      break;

    case NOTE_ACTIONS.DECREASE_PRIORITY:
      console.log('DECREASE_PRIORITY');
      break;

    default:
      // Никогда не случится
      alert('NOT A BUTTON');
  }
};

// Search
const handleSearchFormInput = ({ target }) => {
  const query = target.value;
  const hasQuery = notepad.filterNotesByQuery(query);

  renderNoteList(refs.noteList, hasQuery);
};

refs.noteList.addEventListener('click', handleListItemBtnClick);
refs.submitForm.addEventListener('submit', handleSubmitForm);
refs.searchForm.addEventListener('input', handleSearchFormInput);
