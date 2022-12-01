import React, { useState, useEffect } from 'react';
import ChartTable from '../components/ChartTable';
import './ChartContainer.css';
import ChartDropDown from '../components/ChartDropDown';

const ChartContainer = () => {
    const [chart, setChart] = useState([]);


    const [selectedChart, setSelectedChart] = useState(null);

    useEffect(() => {
        getSongs();

    })


    const initialState = function () {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(res => res.json())
            .then(val => {
                setChart(val.feed.entry)
            })
    }


    const getSongs = function () {
        fetch(selectedChart)
            .then(res => res.json())
            .then(val => {
                setChart(val.feed.entry)
            })


    }

    const onChartSelected = function (test) {
        setSelectedChart(test)





    }




    const charts = [
        { name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json" },
        { name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json" },
        { name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json" },
        { name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json" }
    ]

    return (
        <div className="main-container">
            <ChartDropDown charts={charts} onChartSelected={onChartSelected} />
            <ChartTable chart={chart} />

        </div>
    )
}

export default ChartContainer;