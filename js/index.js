
const $video        = document.querySelector('#video');
const $play         = document.querySelector('#play');
const $pausa        = document.querySelector('#pausa');
const $avanzar      = document.querySelector('#avanzar');
const $retroceder   = document.querySelector('#retroceder');
const $progress     = document.querySelector('#progress');


$play.addEventListener('click',()=>{
    $video.play();
    $play.hidden  = true;
    $pausa.hidden = false;
});

$pausa.addEventListener('click',()=>{
    $video.pause()
    $pausa.hidden = true;
    $play.hidden = false;
});

$avanzar.addEventListener('click',()=>{
    $video.currentTime += 10;
    console.log('click',$video.currentTime);
});

$retroceder.addEventListener('click',()=>{
    $video.currentTime -= 10;
    console.log('click',$video.currentTime);
});

$video.addEventListener('loadedmetadata', () => {
    $progress.max = $video.duration
});

$video.addEventListener('timeupdate',()=>{
    $progress.value = $video.currentTime;
});

$progress.addEventListener('input',()=>{
    $video.currentTime = $progress.value;
});