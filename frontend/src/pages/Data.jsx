import React, { useState } from 'react';
import Barchart from '../components/Barchart';
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import { solarData } from '../Data/data';
import '../styles/data.css';

// Define a color map for each country
const colorMap = {
  "India": "rgba(75,192,192,1)",
  "China": "#ecf0f1",
  "Egypt": "#50AF95",
  "United Arab Emirates": "#f3ba2f",
  "United States": "#2a71d0",
  "Mexico": "#ff9f40",
  "Vietnam": "#ff6384"
};

const Data = () => {
  const [BarchartData, setBarChartData] = useState({
    labels: solarData.map((data) => data.Name),
    datasets: [
      {
        label: "Megawatts Peak Capacity",
        data: solarData.map((data) => data.MWP),
        backgroundColor: solarData.map((data) => colorMap[data.Country.trim()]),
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
      },
    ],
  });

  const [PieChartData, setPieChartData] = useState({
    labels: solarData.map((data) => data.Name),  // Show solar panel names
    datasets: [
      {
        label: "Acres",
        data: solarData.map((data) => data.Acres),  // Use Acres for PieChart
        backgroundColor: solarData.map((data) => colorMap[data.Country.trim()] || "#000000"),  // Assign color based on country
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
      },
    ],
  });

  // Tooltip configuration to show the country and value
  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const country = solarData[tooltipItem.dataIndex]?.Country.trim() || "Unknown Country";
            const value = tooltipItem.raw;
            return `${country}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="data-page">
      <h1>Solar Park Data Visualization</h1>
      <p>This page provides a comprehensive visual representation of some of the world’s largest solar parks. 
        The graphs showcase the peak energy capacity, land area, and overall scale of solar plants across different countries.
        Each chart presents a distinct aspect of these solar parks, making it easier to compare their size and output capacity</p>
  
      <div className="chart-container">
        <Barchart chartData={BarchartData} options={chartOptions} />
        <p>This bar chart displays the megawatts peak capacity (MWP) of the solar parks.
           Each bar represents a solar park, with its height corresponding to its capacity. 
           This visualization helps users compare the energy output potential of solar parks across different countries.</p>
      </div>
  
      <div className="chart-container">
        <PieChart chartData={PieChartData} options={chartOptions} />
        <p>The pie chart breaks down the land area used by each solar park, represented in acres. 
          Each segment of the pie is proportional to the acreage of a solar park, making it easy to visualize which plants occupy the most land 
          and compare the size of the facilities.</p>
      </div>
  
      <div className="chart-container">
        <LineChart chartData={BarchartData} options={chartOptions} />
        <p>The line chart shows how the megawatts peak capacity varies across the different solar parks. 
          It provides a continuous trend, helping to highlight the progression in capacity from one solar park to another, 
          allowing users to observe capacity trends across multiple countries</p>
      </div>
    </div>
  );
};

export default Data;
