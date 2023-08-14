import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';
player.on('timeupdate', function ({ seconds }) {
  // data is an object containing properties specific to that event
  localStorage.setItem(LOCAL_KEY, seconds);
});
player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);

// const onPlay = function (data) {
//     // data is an object containing properties specific to that event
//     const getTime = data.seconds;

//     localStorage.setItem("videoplayer-current-time", getTime);
//     const backTime = Number (localStorage.getItem("videoplayer-current-time"))

//      console.log(backTime)

//         player.setCurrentTime().then(function() {
//     // seconds = the actual time that the player seeked to

// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });

//  };

// player.on('timeupdate', onPlay);
