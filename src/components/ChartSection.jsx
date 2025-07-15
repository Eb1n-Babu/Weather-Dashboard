import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale,
} from 'chart.js';
import './ChartSection.css';

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    Title,
    CategoryScale
);

const ChartSection = () => {
    const mockData = [22, 24, 25, 23, 26];

    const chartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
            {
                label: 'Temperature (°C)',
                data: mockData,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.3,
            },
        ],
    };

    return (
        <div className="chart-container">
            <h2 className="chart-title">Temperature Trend</h2>
            <Line data={chartData} />
        </div>
    );
};

export default ChartSection;