const playBtn = document.getElementsByClassName("play")[0];
const audio = document.getElementsByTagName("audio")[0];
const disc = document.getElementsByClassName("disc")[0];
const nextBtn = document.getElementsByClassName("next")[0];
const playList = [
    {
        name: "ukulele",
        src: "./"
    }
]
console.log(nextBtn);

console.log(playBtn)

playBtn.addEventListener ("click",() =>{
    // audio.scr = "";
    if(audio.paused){
        audio.play();
        disc.classList.add("anime_rot");
        playBtn.textContent = "pause"
    }else{
        audio.pause();
        playBtn.textContent = "play"
        disc.classList.remove("anime_rot")
    }
});
 // current = 0
// "./assets/songs/music-player_music_ukulele.mp3" audio.src =  "./assets/songs/music-player_music_ukulele.mp3"
// ["./assets/songs/music-player_music_ukulele.mp3", "./assets/songs/music-player_music_ukulele.mp3"] -> audio.src = songs[0]
// [{name: "songname", songSrc: "./assets/songs/music-player_music_ukulele.mp3"}, {}] -> songs[current].name

