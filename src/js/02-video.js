import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem(CURRENT_KEY, data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_KEY)) || 0);
