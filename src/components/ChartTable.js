import React from 'react';
import SongRow from './SongRow';
import './ChartTable.css'

const ChartTable = ({ chart }) => {


    const chartItems = chart.map((song, index) => {
        return <SongRow song={song} key={index} index={index}/>
    })

    return (
        <div>
            <ul>
                {chartItems}
            </ul>
        </div>
    )
}

export default ChartTable;


