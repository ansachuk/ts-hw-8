import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoIframe = document.querySelector('#vimeo-player');
const player = new Player(vimeoIframe);
const savedTime = localStorage.getItem('videoplayer-current-time');

const recordCurrentTime = data => {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
};

if (savedTime) {
  player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(recordCurrentTime, 1000));
