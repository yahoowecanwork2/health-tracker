import React from 'react'
import { Routes, Route } from 'react-router-dom'
import navBar from './components/navBar'
import Home from './pages/Home'
import WaterTracker from './components/WaterTracker'
import MealTracker from './components/MealTracker'
import ExerciseTracker from './components/ExerciseTracker'
import PeriodTracker from './components/PeriodTracker'

function App() {
  return (
    <div>
      <navBar />
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/water" element={<WaterTracker />} />
        <Route to="/meal" element={<MealTracker />} />
        <Route to="/exercise" element={<ExerciseTracker />} />
        <Route to="/periods" element={<PeriodTracker />} />
      </Routes>
    </div>
  )
}

export default App