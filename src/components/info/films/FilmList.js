import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getFilms} from '../../../redux/actions'
import FilmCard from './FilmCard'

const FilmList = ({listOfFilms}) => {
  const films = useSelector(state => state.films)
  const dispatch = useDispatch()


  useEffect(() => {
    listOfFilms.forEach((film) => {
      dispatch(getFilms(film))
    })
  }, [dispatch, listOfFilms])


  return (
			<div>
				<h3>Filmography</h3>
				{films.map((filmInfo, index) => {
					return <FilmCard key={index} title={filmInfo.title} image={filmInfo.url} />;
				})}
			</div>
		);
}

export default FilmList
