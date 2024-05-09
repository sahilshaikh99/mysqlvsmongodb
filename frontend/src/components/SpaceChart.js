import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

// Register necessary components with Chart
Chart.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

export function SpaceChart({ title = "Chart.js Line Chart", labels = ['100', '1000', '10000', '100000', '1000000', '3000000'], mongoData = [10, 15, 20, 18, 25, 22, 30], mysqlData = [15, 20, 25, 22, 30, 28, 35] }) {
  const chartRef = useRef(null);

  const data = {
    labels,
    datasets: [
      {
        label: 'MongoDB',
        data: mongoData,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 4,
        pointRadius: 4, // Increase data point size
        pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Customize point color
      },
      {
        label: 'MySQL',
        data: mysqlData,
        fill: false,
        backgroundColor: 'rgba(192, 75, 192, 0.4)',
        borderColor: 'rgba(192, 75, 192, 1)',
        borderWidth: 4,
        pointRadius: 4, // Increase data point size
        pointBackgroundColor: 'rgba(192, 75, 192, 1)', // Customize point color
      },
    ],
  };

  useEffect(() => {
    let myChart = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      if (myChart) {
        myChart.destroy();
      }

      myChart = new Chart(ctx, {
        type: 'line', 
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 25 
                }
              }
            },
            title: {
              display: true,
              text: title,
              font: {
                size: 25 
              }
            },
            datalabels: {
              backgroundColor: function(context) {
                return context.dataset.backgroundColor;
              },
              borderRadius: 4,
              color: 'black',
              font: {
                weight: 'bold',
                size: 25
              },
              formatter: function (value, context) {
                return value + " MB";;
              },
              padding: 6,
              align: function(context) {
                return context.dataset.label === 'MongoDB' ? 'start' : 'end';
              },
              anchor: function(context) {
                return context.dataset.label === 'MongoDB' ? 'start' : 'end';
              }
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Database Records',
                font: {
                  size: 25 
                }
              },
              position: 'bottom',      
              ticks: {
                 padding: 25,
                 color: 'black',
                 font: {
                  size: 25 
                }
              }
            },
            y: {
              title: {
                display: true,
                text: "Size in MB",
                font: {
                  size: 25 
                }
              },
              grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)',
              },
              ticks: {
                color: 'black',
                font: {
                  size: 25 
                },
                callback: function (value) {
                  return value + "MB";
                },
              },
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
          },
          animation: {
            duration: 1000,
          },
          layout: {
            padding: {
              bottom: 10, // Adjust bottom padding to move x-axis labels further below
              top: 5 // Reduce top padding to maintain chart size
            }
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
