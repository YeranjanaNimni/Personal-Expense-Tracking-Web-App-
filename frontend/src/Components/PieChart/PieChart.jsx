import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const PieChart = ({seriesData, labels}) => {

      const [options, setOptions] = useState( {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: labels,
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
          const [series, setSeries] = useState(seriesData)

  return (
    <div className='my-5'>
            <ReactApexChart options={options} series={series} type="pie" width={580} />
    </div>
  )
}

export default PieChart