const initialState = [
  {
    title: "Horizon Zero Dawn",
    id: 0,
    cards: [
      {
        id: 0,
        text: "Lorem ipsum",
      },
      {
        id: 1,
        text: "Lorem ipsum2",
      },
    ],
  },
  {
    title: "GTA V",
    id: 1,
    cards: [
      {
        id: 2,
        text: "Lorem ipsum3",
      },
      {
        id: 3,
        text: "Lorem ipsum4",
      },
    ],
  },
];

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    /*  case FilmActionTypes.API_FILMS:
      return { loading: true, error: null, films: [] };

    case FilmActionTypes.API_FILMS_SUCCESS:
      return {
        loading: false,
        error: null,
        films: action.payload,
      };

    case FilmActionTypes.API_FILMS_ERROR:
      return {
        loading: false,
        error: action.payload,
        films: [],
      };

    case FilmActionTypes.SET_FILMS:
      return { ...state, films: [...state.films, ...action.payload] }; */

    default:
      return state;
  }
};
