import React from "react";
import './chart.styles.css';

import {
    Chart as ChartJS,
    registerables
  } from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(...registerables);
//ChartJS.defaults.scale.grid.drawOnChartArea = false;


const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

const ChartPage = ({color}) => {
    return (
        <div className="new-chart">
            <Line
            data={{
                labels: labels,
                datasets: [{
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: color,
                data: [12, 18, 48, 18, 42, 32],
                pointBackgroundColor:"#ffffff",
                pointBorderColor: color,
                pointRadius:5,
                
                }]
            }}
            options={{
                scaleShowVerticalLines: false,
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                      display: false
                    }
                  },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                              return tooltipItem.yLabel;
                       }
                    }
                },
                
                scales: {
                    x: {
                        grid: {
                        display: false,
                        ticks:{
                            margin:10
                        }
                        },
                    },
                    y: {
                        grid: {
                            display: true,
                            drawBorder:false
                            
                        },
                        min: 10,
                        max: 50,
                        ticks: {
                        stepSize: 10,
                        padding:10
                        }
                        },
                    },


                layout:{
                    padding: 10
                }
                
                  
                 
              }}
        />
        </div>
        
    )
}


export default ChartPage