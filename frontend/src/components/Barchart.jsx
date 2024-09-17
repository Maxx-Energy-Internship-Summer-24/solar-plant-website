import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Barchart = ({ chartData }) => {
  return (
    <Bar 
      data={chartData} 
      options={{
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
        },
      }} 
    />
  );
};

export default Barchart;
