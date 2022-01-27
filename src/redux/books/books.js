import Axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookStore/books/FETCH_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBook = ((payload) => ({
  type: FETCH_BOOK,
  payload,
}));

export const addBookAPI = (payload) => async (dispatch) => {
  const { id, title, category } = payload;
  const newBook = { item_id: id, title, category };
  await Axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oA9H87RtWKrctkgy8p80/books', newBook);
  dispatch(addBook(payload));
};

export const fetchBookAPI = () => async (dispatch) => {
  const books = await Axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oA9H87RtWKrctkgy8p80/books');
  const mapBooks = Object.entries(books.data).map(([id, book]) => {
    const { title, category } = book[0];
    return { id, title, category };
  });
  dispatch(fetchBook(mapBooks));
};

export const removeBookAPI = (id) => async (dispatch) => {
  await Axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oA9H87RtWKrctkgy8p80/books/${id}`);
  dispatch(removeBook({ id }));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
