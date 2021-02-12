import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStarShips } from '../../../redux/actions';
import StarshipCard from './StarshipCard';

const StarshipList = ({ listOfStarShips }) => {
	const starships = useSelector((state) => state.starships);
	const dispatch = useDispatch();

	useEffect(() => {
		listOfStarShips.forEach((starship) => {
			dispatch(getStarShips(starship));
		});
	}, [dispatch, listOfStarShips]);

	return (
    <div>
      <h3>Piloted StarShips</h3>
      {starships.map((starshipInfo, index) => {
        return <StarshipCard key={index} name={starshipInfo.name} />;
        })}
		</div>
	);
};

export default StarshipList
