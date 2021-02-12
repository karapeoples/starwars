import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import FilmList from './films/FilmList'
import VehicalList from './vehicles/VehicalList'
import StarshipList from './starships/StarshipList'
import {clearFilms, clearVehicles, clearStarShips} from '../../redux/actions'

const BackSide = ({ toggle }) => {
 const individual = useSelector(state => state.person)
  const [filmList] = useState(individual.films)
  const [allVehicles]= useState(individual.vehicles)
  const [allStarships]= useState(individual.starships)
const dispatch = useDispatch()

  const cancel = (e) => {
    toggle(e)
    dispatch(clearFilms())
    dispatch(clearVehicles())
    dispatch(clearStarShips())
 }
  return (
    <div>
      <div className='filmography'>
        <FilmList listOfFilms={filmList} />
      </div>
      <div className="vroom">
      <VehicalList listOfVehicles={allVehicles}/>
      <StarshipList listOfStarShips={allStarships} />
      </div>
      <button onClick={cancel}>Cancel</button>
    </div>
  )
}

export default BackSide
