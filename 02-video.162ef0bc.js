player.on("timeupdate",(function(e){const t=e.seconds;localStorage.setItem("videoplayer-current-time",t);const n=localStorage.getItem("videoplayer-current-time");console.log(n),player.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}))}));
//# sourceMappingURL=02-video.162ef0bc.js.map
