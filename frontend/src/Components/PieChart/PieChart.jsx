import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {

      const [options, setOptions] = useState( {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          });
          const [series, setSeries] = useState([44, 55, 13, 43, 22])

  return (
    <div>
            <ReactApexChart options={options} series={series} type="pie" width={580} />
    </div>
  )
}

export default PieChart