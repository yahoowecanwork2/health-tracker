import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import WaterTracker from './components/WaterTracker'
import MealTracker from './components/MealTracker'
import ExerciseTracker from './components/ExerciseTracker'
import SleepTracker from './components/SleepTracker'
import PeriodTracker from './components/PeriodTracker'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/water" element={<WaterTracker />} />
        <Route path="/meal" element={<MealTracker />} />
        <Route path="/sleep" element={<SleepTracker />} />
        <Route path="/exercise" element={<ExerciseTracker />} />
        <Route path="/periods" element={<PeriodTracker />} />
        <Route path="/*" element={<h2>404 - Page Not Found</h2>} />

      </Routes>
    </div>
  )
}

export default App