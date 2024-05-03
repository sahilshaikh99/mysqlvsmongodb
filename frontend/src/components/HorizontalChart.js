import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary components with Chart
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'MongoDB',
      data: [10, 15, 20, 18, 25, 22, 30],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
    {
      label: 'MySQL',
      data: [15, 20, 25, 22, 30, 28, 35], // Second set of data
      fill: false,
      backgroundColor: 'rgba(192, 75, 192, 0.2)',
      borderColor: 'rgba(192, 75, 192, 1)',
      borderWidth: 2,
    },
  ],
};

export function HorizontalChart({ title = "Chart.js Bar Chart" }) {
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (myChart) {
        myChart.destroy();
      }

      myChart = new Chart(ctx, {
        type: 'bar', // Change type to 'bar'
        data: data,
        options: {
          indexAxis: 'y', // Display bars horizontally
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: title,
            },
          },
        },
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
}
