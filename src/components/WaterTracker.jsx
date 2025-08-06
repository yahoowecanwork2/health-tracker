import React from 'react';
import '../css-components/WaterTracker.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Redux/waterSlice';

function WaterTracker() {
    const glasses = useSelector((state) => state.water.glasses);
    const dispatch = useDispatch();


    return (
        <div className='water-container'>
            <h1>water Intake Tracker</h1>
            <p>You have had <strong>{glasses}</strong> glass{glasses !== 0 && "es"} today </p>
            <div className='btn-group'>
                <button onClick={() => dispatch(decrement)}>-</button>
                <button onClick={() => dispatch(increment)}>+</button>
            </div>

        </div>
    )
}

export default WaterTracker;