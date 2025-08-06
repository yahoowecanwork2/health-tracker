import React, { useEffect } from 'react';
import '../css-components/WaterTracker.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Redux/waterSlice';
import ProgressBar from './ProgressBar';
import WeeklyData from './WeeklyData';

function WaterTracker() {
    const glasses = useSelector((state) => state.water.glasses);
    const dispatch = useDispatch();
    useEffect(() => {
        if (glasses == 8) {
            alert("🎉 Congrats! You’ve completed your daily water goal!")
        }
    }, [glasses])

    return (
        <div className='water-container'>
            <h1> 💧water Intake Tracker</h1>
            <p> 🥤You have had <strong>{glasses}</strong> glass{glasses !== 1 && "es"} today </p>
            <ProgressBar percentage={(glasses / 8) * 100} />
            <p>{glasses}/8 glasses completed</p>
            <div className='btn-group'>
                <button onClick={() => dispatch(decrement())}>➖ </button>
                <button onClick={() => dispatch(increment())}>➕</button>
            </div>
            <WeeklyData />
        </div>
    )
}

export default WaterTracker;