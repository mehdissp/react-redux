import React from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../actions'

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectedSong(song)}
                            className="ui button primary">
                            select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }


    render() {


        return (
            <div className="ui middle aligned  devided list">
                {this.renderList()}
            </div>
        )

    }
}

const mapStoreToProps = (state) => {

    return { songs: state.songs }
}

export default connect(mapStoreToProps, {
    selectedSong: selectedSong
})(SongList);