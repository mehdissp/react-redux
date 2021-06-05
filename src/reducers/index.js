export const songReducer = () => {
    return [
        { title: 'zim zim', duration: '4:05' },
        { title: 'behet gol midam', duration: '2:35' },
        { title: 'Alijenab', duration: '5:05' },
        { title: 'bigarar', duration: '3:15' },


    ]
}


export const selectedSsongRreducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong
}