import React from "react";
import './SongRow.css';
const SongRow = ({ song, index }) => {


    return (
        <li >
            <div>
                {index + 1}.
            </div>
            <div>
                <img src={song["im:image"][0]["label"]} alt="image" />
            </div>
            <div>
                {song["im:name"]["label"]} by {song["im:artist"]["label"]}
            </div>
        
        </li>

    )

}

export default SongRow;