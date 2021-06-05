import React from 'react';
import { selectedSong } from '../actions'
import SongList from './SongList';


export default () => {

  return (
    <div className="ui container grid" style={{marginTop: '10px'}}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>

      </div>
    </div>
  );

};