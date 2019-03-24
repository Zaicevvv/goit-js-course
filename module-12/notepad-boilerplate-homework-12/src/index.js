import MicroModal from 'micromodal';
import Notyf from 'notyf';
import noteMarkup from './templates/note-markup.hbs';
import Notepad from './js/utils/notepad-model';
// import initialNotes from './assets/notes.json';
import { NOTE_ACTIONS, NOTIFICATION_MESSAGES } from './js/utils/constants';
import { getRefs, addListItem, renderNoteList } from './js/utils/view';
import './sass/main.scss';
import 'notyf/dist/notyf.min.css';

const notyf = new Notyf();
const notepad = new Notepad(); // (initialNotes)
// const initialNotesWithStringifyPriority = initialNotes.map(
//   note => ((note.priority = Notepad.getPriorityName(note.priority)), note),
// );
const refs = getRefs();

// renderNoteList(
//   refs.noteList,
//   initialNotesWithStringifyPriority.map(note => noteMarkup(note)),
// );

notepad
  .loadNotes()
  .then(loadedNotes =>
    renderNoteList(refs.noteList, loadedNotes.map(note => noteMarkup(note))),
  );

const handleSubmitForm = e => {
  e.preventDefault();

  const [title, body] = e.target.elements;
  if (!title.value || !body.value) {
    notyf.alert(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
    return;
  }

  const createNote = {
    title: title.value,
    body: body.value,
    priority: Notepad.getPriorityName(0),
  };

  notepad
    .saveNote(createNote)
    .then(createdNote => addListItem(refs.noteList, createdNote));

  refs.submitForm.reset();

  MicroModal.close('note-editor-modal');
};

// Delete note
const removeListItem = el => {
  const parentNodeToRemove = el.closest('.note-list__item');
  const id = parentNodeToRemove.dataset.id;

  notepad.deleteNote(id).then(() => parentNodeToRemove.remove());
};

const handleListItemBtnClick = ({ target }) => {
  if (target.parentNode.nodeName !== 'BUTTON') return;

  const action = target.parentNode.dataset.action;

  switch (action) {
    case NOTE_ACTIONS.DELETE:
      notyf.confirm(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
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
  notepad
    .filterNotesByQuery(query)
    .then(hasQuery =>
      renderNoteList(refs.noteList, hasQuery.map(note => noteMarkup(note))),
    );
};

const handleModalOpen = () => {
  MicroModal.show('note-editor-modal');
};

refs.noteList.addEventListener('click', handleListItemBtnClick);
refs.submitForm.addEventListener('submit', handleSubmitForm);
refs.searchForm.addEventListener('input', handleSearchFormInput);
refs.modalOpen.addEventListener('click', handleModalOpen);
