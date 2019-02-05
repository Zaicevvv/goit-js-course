'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }
  get notes() {
    return this._notes;
  }
  findNoteById(id) {
    const note = this.notes.find(note => note.id === id);

    return note;
  }
  saveNote(note) {
    this.notes.push(note);
    return note;
  }
  deleteNote(id) {
    for (let i = 0; i < this.notes.length; i += 1) {
      const note = this.notes[i];

      if (note.id === id) {
        this.notes.splice(i, 1);
        return;
      }
    }
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
    for (const note of this.notes) {
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
    const filteredNotes = [];
    for (const note of this.notes) {
      if (note.priority === priority) {
        filteredNotes.push(note);
      }
    }
    return filteredNotes;
  }
  static getPriorityName(priorityId) {
    return Notepad.PRIORITIES[priorityId].name;
  }
}

// Статическое свойство
Notepad.PRIORITIES = {
  0: { id: 0, value: 0, name: 'Low' },
  1: { id: 1, value: 1, name: 'Normal' },
  2: { id: 2, value: 2, name: 'High' },
};

const initialNotes = [
  {
    id: 1,
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 2,
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 3,
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 4,
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

const notepad = new Notepad(initialNotes);

console.log(notepad.notes);

const refs = {
  noteList: document.querySelector('.note-list'),
};

const createNoteContent = (title, body) => {
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

const createNoteFooter = priority => {
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
    spanPriority
  );
  secondSection.append(
    createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT),
    createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE)
  );
  footer.append(firstSection, secondSection);

  return footer;
};

const createActionButton = (action, text) => {
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

const createListItem = ({ id, title, body, priority }) => {
  const listItem = document.createElement('li');
  listItem.classList = 'note-list__item';
  listItem.dataset.id = id;

  const div = document.createElement('div');
  div.classList = 'note';

  div.append(createNoteContent(title, body), createNoteFooter(priority));
  listItem.appendChild(div);

  return listItem;
};

const renderNoteList = (listRef, notes) => {
  const listItems = notes.map(item => createListItem(item));

  listRef.innerHTML = '';
  listRef.append(...listItems);
};

renderNoteList(refs.noteList, initialNotes);
