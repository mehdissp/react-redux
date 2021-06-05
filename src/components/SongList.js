import React from 'react';
import { connect } from 'react-redux';


class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">
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

        //        console.log(this.props)
        return (
            <div className="ui middle aligned  devided list">
                {this.renderList()}
            </div>
        )

    }
}

const mapStoreToProps = (state) => {
    //console.log(state);
    return { songs: state.songs }
}

export default connect(mapStoreToProps)(SongList);