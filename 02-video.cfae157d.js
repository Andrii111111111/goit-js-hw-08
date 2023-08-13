player.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t);var n=localStorage.getItem("videoplayer-current-time");console.log(n),player.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}))}));
//# sourceMappingURL=02-video.cfae157d.js.map
