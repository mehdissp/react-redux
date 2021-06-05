

export const selectedSong =(song)=>{
    return{
        type:'SONG_SELECTED', //requerid
        payload:song, // OPTIONAL
    };
};


