import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';
const throttl = new throttle();
// let f1000;
// const throttle = require('lodash.throttle');
// throttle(player, 1000);
// player.on('timeupdate', function ({ seconds }) {
//   localStorage.setItem(LOCAL_KEY, seconds);
// });

throttl(() => {
  player.on('timeupdate', function ({ seconds }) {
    localStorage.setItem(LOCAL_KEY, seconds);
  });
}, 3000);

// let sss = throttle(player.on('timeupdate'), 1000);
// let f1000 = throttle( function ({ seconds }), 1000)
// player.on('timeupdate', function ({ seconds }) {
//   localStorage.setItem(LOCAL_KEY, seconds);
//   //   _.throttle(() => {
//   //     localStorage.setItem(LOCAL_KEY, seconds);
//   //   }, 1000);
// });
player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);

console.log(throttle);
