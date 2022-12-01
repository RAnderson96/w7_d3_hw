import React, { useState, useEffect } from 'react';
import ChartTable from '../components/ChartTable';
import './ChartContainer.css';
import ChartDropDown from '../components/ChartDropDown';

const ChartContainer = () => {
    const [chart, setChart] = useState([]);

    useEffect(() => {
        getSongs(genres[0].url);
    },[])

    const getSongs = function (url) {
        fetch(url)
            .then(res => res.json())
            .then(val => {
                setChart(val.feed.entry)
            })
            .catch(err => console.error)
    }

    const handleSelectChange = event => {
        getSongs(event.target.value);
      }

    const genres = [
        { name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json" },
        { name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json" },
        { name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json" },
        { name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json" }
    ]

    return (
        <div className="main-container">
            <ChartDropDown genres={genres} handleSelectChange={handleSelectChange} />
            <ChartTable chart={chart} />
        </div>
    )
}

export default ChartContainer;