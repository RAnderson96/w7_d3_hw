import React from 'react';

const ChartSelect = ({genres, handleSelectChange}) => {

    

    const chartOptions = genres.map((genre, index) => {
        return (
            <option value={genre.url} key={genre.name} >{genre.name}</option>
        )
        
    })

    return (
        <div>
            <select onChange={handleSelectChange}>
                {chartOptions}
            </select>
        </div>
    )
}

export default ChartSelect;


