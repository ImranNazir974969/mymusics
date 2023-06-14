console.log("Wellcome to my music");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogrssBar = document.getElementById('myprogrssBar');
let gifsongs =document.getElementById('gifsongs');
let masterSongName = document.getElementById('masterSongName');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songName: "let me love you", filePath: "songs/1.mp3", coverpath: "covers/1pic.jpeg" },
    { songName: "friends", filePath: "songs/2.mp3", coverpath: "covers/2pic.jpeg" },
    { songName: "Despacito", filePath: "songs/3.mp3", coverpath: "covers/3pic.jpg" },
    { songName: "taki taki", filePath: "songs/4.mp3", coverpath: "covers/4pic.jpeg" },
    { songName: "Lily ", filePath: "songs/5.mp3", coverpath: "covers/5pic.jpeg" },
    { songName: "Ya Lili", filePath: "songs/6.mp3", coverpath: "covers/6pic.jpeg" },
    { songName: "Darkside ", filePath: "songs/7.mp3", coverpath: "covers/7pic.jpeg" },
    { songName: " Sugar ", filePath: "songs/8.mp3", coverpath: "covers/8pic.jpeg" },
]

songitems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

//Handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        gifsongs.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        gifsongs.style.opacity = 0;
    }

})
//listen to events
audioElement.addEventListener('timeupdate', () => {
    //   update seckbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogrssBar.value = progress;
})

myprogrssBar.addEventListener('change', () => {
    audioElement.currentTime = myprogrssBar.value * audioElement.duration / 100;
})

 const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
 }

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gifsongs.style.opacity = 1;
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pauseS");
})