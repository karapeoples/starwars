import React, { useEffect } from 'react'
import PeoplesCard from './PeoplesCard'
import { useSelector, useDispatch } from 'react-redux';
import { getFolks } from '../../redux/actions'

const PeoplesList = () => {
  const peopleList = useSelector(state => state.people)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getFolks())
    //eslint-disable-next-line
  }, [dispatch])

  return (
    <div>
      {peopleList.map((info, index) => {
        return(
          <PeoplesCard key={index} name={info.name} url={info.url}/>
        )
      })}
    </div>
  )
}

export default PeoplesList
