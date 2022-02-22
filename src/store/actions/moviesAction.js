import { Services } from '../../api/Services';
import TYPES from "../types";

// asynchronously dispatch action
export const movies = (title, year, type, page, onError) => {
  return async (dispatch) => {
    const server = new Services();
    server
      .getMovies(title, year, type, page)
      .then(res => {
        dispatch({
          type: TYPES.MOVIES,
          payload: res.entity.Search,
        });
      })
      .catch(error => onError(error));
  };
};
