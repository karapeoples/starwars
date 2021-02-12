import React, {useState} from 'react'
import BackSide from './BackSide'
import { useDispatch } from 'react-redux'
import {getFolkById} from '../../redux/actions'

const PeoplesCard = ({ name, url }) => {
  const [front, setFront] = useState(false)
  const dispatch = useDispatch()

  const toggle = (e) => {
    e.preventDefault()
    setFront(!front)
  }

  const getInfo = (e) => {
    e.preventDefault()
    dispatch(getFolkById(url))
    setTimeout(() => {
      toggle(e)
    },2000)

  }
  return (
    <div>
      {front === false ?
        <div>
          <h1>{name}</h1>
          <button onClick={getInfo}>Info</button>
        </div>
        : <BackSide toggle={toggle}/>
      }
    </div>
  )
}

export default PeoplesCard
