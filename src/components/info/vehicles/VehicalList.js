import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVehicles } from '../../../redux/actions';
import VehicleCard from './VehicleCard';

const VehicalList = ({ listOfVehicles }) => {
	const vehicles = useSelector((state) => state.vehicles);
	const dispatch = useDispatch();

	useEffect(() => {
		listOfVehicles.forEach((vehicle) => {
			dispatch(getVehicles(vehicle));
		});
	}, [dispatch, listOfVehicles]);

	return (
		<div>
			<h3>Driven Vehicles</h3>
			{vehicles.map((vehicleInfo, index) => {
				return <VehicleCard key={index} name={vehicleInfo.name} />;
			})}
		</div>
	);
};

export default VehicalList
