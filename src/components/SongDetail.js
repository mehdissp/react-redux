import React from 'react';
import { connect } from 'react-redux';




const SongDetail=props=>{
console.log(props)
return(
<div>
    SongDetail
</div>

)
};

const mapStoreToProps = (state)=>{
return { song:state.selectedSong}
};

export default connect(mapStoreToProps)(SongDetail);
