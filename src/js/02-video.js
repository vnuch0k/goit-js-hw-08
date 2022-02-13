import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

  
    const update = function(duration) {
        // console.log(duration.seconds);
        localStorage.setItem('videoplayer-current-time', duration.seconds)
    }
    player.on('timeupdate', throttle(update, 1000 ));



const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    const parsedData = JSON.parse(savedTime)
    console.log(parsedData);
    player.setCurrentTime(parsedData);
}





