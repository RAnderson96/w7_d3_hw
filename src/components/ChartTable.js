import React from 'react';
import SongRow from './SongRow';
import './ChartTable.css'

const ChartTable = ({ chart }) => {


    const chartItems = chart.map((song, index) => {
        return <SongRow
            key={song.id.attributes["im:id"]}
            position={index + 1}
            title={song['im:name'].label}
            artist={song['im:artist'].label}
            image={song['im:image'][1].label}
            audio={song.link[1].attributes.href} />
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


