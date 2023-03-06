import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(() => {
    player.getCurrentTime().then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000)
);

const time = [localStorage.getItem('videoplayer-current-time')];

player
  .setCurrentTime(time[0])
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
