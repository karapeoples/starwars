import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {SET_ERROR, GET_PEOPLE, GET_FILMS, PEOPLE_INFO, GET_PERSON, CLEAR_FILMS,CLEAR_VEHICLES, CLEAR_STAR_SHIPS, GET_VEHICLES, GET_STAR_SHIPS} from './actions'




const initialState = {
  error: '',
  people:[],
  films: [],
  person: [],
  vehicles: [],
  starships: [],
  peopleInfo: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case PEOPLE_INFO:
      return {
        ...state,
        peopleInfo: action.payload
      }
    case GET_PEOPLE:
      return {
        ...state,
        people: action.payload
      }
    case GET_FILMS:
      return {
        ...state,
        films:[...state.films, ...action.payload]
      }
    case CLEAR_FILMS:
      return {
        ...state,
        films: []
      }
    case GET_VEHICLES:
      return {
        ...state,
        vehicles:[...state.vehicles, ...action.payload]
      }
    case CLEAR_VEHICLES:
      return {
        ...state,
        vehicles: []
      }
    case GET_STAR_SHIPS:
      return {
        ...state,
        starships:[...state.starships, ...action.payload]
      }
    case CLEAR_STAR_SHIPS:
      return {
        ...state,
        starships: []
      }
    case GET_PERSON:
      return {
        ...state,
        person: action.payload
      }
    default:
      return state
  }
}


const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log('THIS IS THE STORE!', store.getState()));
export default store;