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
          }
        });
      });
    
    return (
      <div >
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    )

}  