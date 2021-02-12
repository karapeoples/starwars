import axios from 'axios'

const api = 'https://swapi.dev/api';

export const SET_ERROR = 'SET_ERROR';
export const GET_PEOPLE = 'GET_PEOPLE';
export const PEOPLE_INFO = 'PEOPLE_INFO'
export const GET_FILMS = 'GET_FILMS'
export const GET_PERSON = 'GET_PERSON'
export const CLEAR_FILMS = 'CLEAR_FILMS'
export const CLEAR_VEHICLES = 'CLEAR_VEHICLES'
export const CLEAR_STAR_SHIPS = 'CLEAR_STAR_SHIPS'
export const GET_VEHICLES = 'GET_VEHICLES'
export const GET_STAR_SHIPS = 'GET_STAR_SHIPS'

export const getFolks = () => dispatch => {
  axios
    .get(`${api}/people/`)
    .then(res => {
      dispatch({ type: GET_PEOPLE, payload: res.data.results })
      dispatch({ type: PEOPLE_INFO, payload: res.data})
    })

    .catch(err => {
      dispatch({type: SET_ERROR, payload:err.message})
  })
}

export const getFolkById = (url) => dispatch => {
  axios
    .get(`${url}`)
    .then(res =>{
      dispatch({type: GET_PERSON, payload:res.data})
    })
    .catch(err => {
     dispatch({type: SET_ERROR, payload: err.message})
  })
}

export const getFilms = (id) =>  dispatch =>{
  axios
    .get(`${id}`)
    .then((res) => {
    dispatch({type: GET_FILMS, payload: [res.data]})
    })
    .catch((err) => {
    dispatch({type:SET_ERROR, payload:err.message})
  })
}

export const clearFilms = () => dispatch => {
  dispatch({type: CLEAR_FILMS, payload: null})
}

export const getVehicles = (id) => (dispatch) => {
	axios
		.get(`${id}`)
		.then((res) => {
			dispatch({ type: GET_VEHICLES, payload: [res.data] });
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err.message });
		});
};

export const clearVehicles = () => (dispatch) => {
	dispatch({ type: CLEAR_VEHICLES, payload: null });
};

export const getStarShips = (id) => (dispatch) => {
	axios
		.get(`${id}`)
		.then((res) => {
			dispatch({ type: GET_STAR_SHIPS, payload: [res.data] });
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err.message });
		});
};

export const clearStarShips = () => (dispatch) => {
	dispatch({ type: CLEAR_STAR_SHIPS, payload: null });
};