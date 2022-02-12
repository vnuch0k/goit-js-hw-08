import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    const update = function(duration) {
        console.log(duration.seconds);
        localStorage.setItem('videoplayer-current-time', duration.seconds)
    }
    player.on('timeupdate', throttle(update, 1000 ));

console.log(localStorage);

const savedTime = localStorage.getItem('videoplayer-current-time');
const parsedData = JSON.parse(savedTime)
console.log(parsedData);


    
player.setCurrentTime(parsedData).then(function(seconds) {
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