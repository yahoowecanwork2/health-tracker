import React from 'react';
import '../css-components/weeklyData.css';
import { useSelector } from 'react-redux';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function WeeklyData() {
    const weeklyData = useSelector((state) => state.water.weeklyData);

    const chartData = days.map((day, index) => ({
        day,
        glasses: weeklyData[index] || 0,
    }));

    return (
        <div className="weekly-chart-container">
            <h2>📊 Weekly Water Intake (Glasses)</h2>
            <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="glasses" fill="#00bfff" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default WeeklyData;
