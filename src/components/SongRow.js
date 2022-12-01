import React from "react";
import './SongRow.css';
const SongRow = ({ title, artist, position, image, audio}) => {
    const altTag = `${title} by ${artist}`;

    return (
        <li >
            <div>
                {position}.
            </div>
            <div>
                <img src={image} alt={altTag} />
            </div>
            <div>
                {title} by {artist}
            </div>
            <div>
                <audio   id="media-player" controls>
                    <source src={audio} type="audio/mpeg"></source>
                </audio>
            </div>
        
        </li>

    )

}

export default SongRow;