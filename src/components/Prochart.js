import React, { useEffect, useState } from 'react'
import Chart from "chart.js";


export default function Prochart () {
    const [ dataChart, setDataChart ] = useState ( {} );
    const [ chartType, setChartType] = useState( "line" );

    useEffect(() => {
        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
          type: chartType,
          data: {
            labels: ["Oct", "Nov", "Dec"],
            datasets: [
              {
                label: "# of Votes",
                data: [12, 19, 3],
                backgroundColor: [
                  "Red",
                  "Blue",
                  "Yellow",
                  "Green",
                  "Purple",
                  "Orange"
                ],
                borderColor: ["Red", "Blue", "Yellow"],
                borderWidth: 1
              }
            ]
          },
          options: {
            maintainAspectRatio: false,
        }
        });
      });
    
    return (
      <div className="chart-container" styles={"position: relative; height:80vh; width:80vw"}>
        <canvas id="myChart" ></canvas>
      </div>
    )

}  