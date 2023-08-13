const onPlay = function(data) {
    // data is an object containing properties specific to that event
    const getTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", getTime);
   
    const backTime = localStorage.getItem("videoplayer-current-time")
    console.log(backTime)
    player.setCurrentTime(backTime).then(function(getTime) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
};

player.on('timeupdate', onPlay);


