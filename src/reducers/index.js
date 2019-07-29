import t from "../actions/actionTypes";

const initialeState = {};
export default (state = initialeState, action) => {
  switch (action.type) {
    case t.GET_MOVIES:
      return {
        ...state,
        movies: [...action.payload],
        filterCriteria: ["all"],
        currentPage: 1,
        pageSize: 4
      };

    case t.GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case t.FILTER_MOVIES:
      return {
        ...state,
        filterCriteria: action.payload
      };
    case t.LIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload
            ? {
                ...movie,
                likes: !movie.liked ? movie.likes + 1 : movie.likes - 1,
                liked: !movie.liked,
                dislikes: movie.disLiked ? movie.dislikes - 1 : movie.dislikes,
                disLiked: movie.disLiked ? false : movie.disLiked
              }
            : movie
        )
      };
    case t.DISLIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie.id === action.payload
            ? {
                ...movie,
                dislikes: !movie.disLiked
                  ? movie.dislikes + 1
                  : movie.dislikes - 1,
                disLiked: !movie.disLiked,
                likes: movie.liked ? movie.likes - 1 : movie.likes,
                liked: movie.liked ? false : movie.liked
              }
            : movie
        )
      };
    case t.CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case t.DELETE_MOVIE:
      console.log(
        state.movies.filter(movie => movie.category === action.payload.category)
          .length
      );
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload.id),
        // On verifie si ce film est le dernier film dans sa catégorie,
        // si oui : on supprime cette dernière pour qu'elle ne disparait pas à la liste des filtres, et on renitialise filterCriteria
        categories:
          state.movies.filter(
            movie => movie.category === action.payload.category
          ).length === 1
            ? state.categories.filter(
                category => category !== action.payload.category
              )
            : state.categories,
        filterCriteria:
          state.movies.filter(
            movie => movie.category === action.payload.category
          ).length === 1
            ? "all"
            : state.filterCriteria
      };
    case t.CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload
      };
    default:
      return state;
  }
};
