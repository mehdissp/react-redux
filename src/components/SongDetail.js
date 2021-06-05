import React from 'react';
import { connect } from 'react-redux';




const SongDetail = ({ song }) => {
    if (!song) {
        return (
            <h4>
                please select song
            </h4>
        )
    }
    return (
        <div>
            <h3>detail for song :</h3>
            <p>
                title: {song.title}
            </p>
            <p>
                Duration: {song.duration}
            </p>

        </div>

    )
};

const mapStoreToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStoreToProps)(SongDetail);
