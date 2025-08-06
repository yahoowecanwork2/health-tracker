import React from 'react'
import '../css-components/weeklyData.css';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function WeeklyData() {
    const weeklyData = useSelector((state) => state.water.weeklyData);
    return (
        <div className="weekly-chart">
            {
                weeklyData.map((glasses, index) => {
                    <div key={index} className="bar-container">
                        <div
                            className="bar"
                            style={{ height: `${glasses * 10}px` }} // each glass = 10px height
                        ></div>
                        <span className="label">{days[index]}</span>
                    </div>

                })
            }
        </div>
    )
}

export default WeeklyData