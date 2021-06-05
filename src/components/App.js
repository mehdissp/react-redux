import React from 'react';
import { selectedSong } from '../actions'
import SongDetail from './SongDetail';
import SongList from './SongList';


export default () => {

  return (
    <div className="ui container grid" style={{marginTop: '10px'}}>
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );

};