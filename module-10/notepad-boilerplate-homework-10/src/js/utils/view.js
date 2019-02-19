import Notepad from './notepad-model';
import { /* PRIORITY_TYPES, */ ICON_TYPES, NOTE_ACTIONS } from './constants';

export const getRefs = () => {
  return {
    noteList: document.querySelector('.note-list'),
    submitForm: document.querySelector('form.note-editor'),
    searchForm: document.querySelector('form.search-form'),
  };
};

export const addListItem = (listRef, note) => {
  const listItem = createListItem(note);
  listRef.appendChild(listItem);
};

export const createNoteContent = (title, body) => {
  const div = document.createElement('div');
  div.classList = 'note__content';

  const titleText = document.createElement('h2');
  titleText.classList = 'note__title';
  titleText.textContent = title;

  const bodyText = document.createElement('p');
  bodyText.classList = 'note__body';
  bodyText.textContent = body;

  div.append(titleText, bodyText);

  return div;
};

export const createNoteFooter = priority => {
  const footer = document.createElement('footer');
  footer.classList = 'note__footer';

  const firstSection = document.createElement('section');
  firstSection.classList = 'note__section';

  const secondSection = document.createElement('section');
  secondSection.classList = 'note__section';

  const spanPriority = document.createElement('span');
  spanPriority.classList = 'note__priority';
  spanPriority.textContent = `Priority: ${Notepad.getPriorityName(priority)}`;

  firstSection.append(
    createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN),
    createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP),
    spanPriority,
  );
  secondSection.append(
    createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT),
    createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE),
  );
  footer.append(firstSection, secondSection);

  return footer;
};

export const createActionButton = (action, text) => {
  const button = document.createElement('button');
  button.classList = 'action';
  button.dataset.action = action;

  const i = document.createElement('i');
  i.classList.add('material-icons');
  i.classList.add('action__icon');
  i.textContent = text;

  button.appendChild(i);

  return button;
};

export const createListItem = ({ id, title, body, priority }) => {
  const listItem = document.createElement('li');
  listItem.classList = 'note-list__item';
  listItem.dataset.id = id;

  const div = document.createElement('div');
  div.classList = 'note';

  div.append(createNoteContent(title, body), createNoteFooter(priority));
  listItem.appendChild(div);

  return listItem;
};

export const renderNoteList = (listRef, notes) => {
  const listItems = notes.map(item => createListItem(item));

  listRef.innerHTML = '';
  listRef.append(...listItems);
};
