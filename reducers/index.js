import { LIST_DECKS, NEW_DECK, ADD_CARD } from './../actions/deck';

const initialState = {
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is JavaScript?',
        answer: 'JavaScript is a high-level, interpreted programming language.'
      }
    ]
  },
  Python: {
    title: 'Python',
    questions: [
      {
        question: 'What is Python?',
        answer:
          'Python is an interpreted high-level programming language for general-purpose programming.'
      },
      {
        question: 'Who is the creator of python?',
        answer: 'Guido van Rossum.'
      }
    ]
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LIST_DECKS:
      return {
        decks: state,
        listDecks: Object.keys(state).map(item => ({
          name: item,
          cards: initialState[item].questions.length
        }))
      };
    case NEW_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.name]: {
            title: action.name,
            questions: []
          }
        }
      };
    case ADD_CARD:
      return {
        ...state,
        decks: {
          ...state.decks,
          ...action.name
        }
      };
    default:
      return state;
  }
}
