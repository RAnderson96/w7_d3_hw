import React from 'react';

const ChartSelect = ({charts, onChartSelected}) => {

    const handleChange = (event) => {
        const chosenChart = charts[event.target.value].url;
        console.log(chosenChart)
        onChartSelected(chosenChart);
        

    }

    const chartOptions = charts.map((chart, index) => {
        return (
            <option value={index} key={index} >{chart.name}</option>
        )
        
    })

    return (
        <div>
            <select defaultValue = "" onChange={handleChange} name="charts" id="charts" >
                <option value="" selected>What chart would you like to see?</option>
                {chartOptions}
            </select>
        </div>
    )
}

export default ChartSelect;