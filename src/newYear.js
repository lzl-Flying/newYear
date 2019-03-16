window.onload = function() {
    var music = document.getElementById('music');
    var audio = document.getElementsByTagName('audio')[0];
    var music_disc = document.getElementsByClassName('music_disc')[0];
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');
    
    audio.addEventListener('ended',function() {
        music.childNodes[1].style.animationPlayState = "pause";
    },false);

    music.addEventListener('touchstart', function() {
        if(audio.paused){
            audio.play();
            this.childNodes[1].setAttribute("class","music_disc play");
            // music_disc.style.animationPlayState = "running";
            // music_disc.style.webkitAnimationPlayState = "running";
        }else{
            audio.pause();
            this.childNodes[1].setAttribute("class","music_disc");
            // music_disc.style.animationPlayState = "pause";
            // music_disc.style.webkitAnimationPlayState = "pause";
        }
    },false);

    page1.addEventListener('touchstart', function() {
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';
        page3.style.top = '100%';

        setTimeout(function() {
            page2.setAttribute('class','page fadeout');
            page3.setAttribute('class','page fadein');
        },5500);
    }, false);
}