console.log("Debuging");

// Initialization of Variables
let SongIndex = 0;
let AudioElement = new Audio('songs/1.mp3');
let MasterPlay = document.getElementById('MasterPlay');
let MyProgressBar = document.getElementById('MyProgressBar')
let gif = document.getElementById('gif')
let MasterSongName = document.getElementById('MasterSongName')
let SongItems = Array.from(document.getElementsByClassName('SongItem'));

let songs = [
    {SongName: "Zihaal e Muskin", FilePath: "songs/1.mp3", CoverPath: "covers/1.jpg"},
    {SongName: "Yaar Ka Sataya Hua Hai", FilePath: "songs/2.mp3", CoverPath: "covers/2.jpg"},
    {SongName: "Udd Jaa Kaale Kaava", FilePath: "songs/3.mp3", CoverPath: "covers/3.jpg"},
    {SongName: "Kya Loge Tum", FilePath: "songs/4.mp3", CoverPath: "covers/4.jpg"},
    {SongName: "Khairiyat From Gadar 2", FilePath: "songs/5.mp3", CoverPath: "covers/5.jpg"},
    {SongName: "Ram Siya Ram(Adipurush)", FilePath: "songs/6.mp3", CoverPath: "covers/6.jpg"},
    {SongName: "Tumhe Kitna Pyaar Karte", FilePath: "songs/7.mp3", CoverPath: "covers/7.jpg"},
    {SongName: "Dilon Ki Doriyan", FilePath: "songs/8.mp3", CoverPath: "covers/8.jpg"},
]
SongItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].CoverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].SongName;
})

// AudioElement.play();

// Handle play/pause click
MasterPlay.classList.remove('MasterPlay')
MasterPlay.addEventListener('click',()=>{
    if(AudioElement.paused || AudioElement.currentTime<=0){
        AudioElement.play();
        MasterPause.classList.remove('MasterPause');
        MasterPlay.classList.add('MasterPlay');
        gif.style.opacity=1;
    }
})
MasterPause.addEventListener('click',()=>{
    if(AudioElement.play || AudioElement.currentTime>=0){
        AudioElement.pause()
        MasterPause.classList.add('MasterPause')
        MasterPlay.classList.remove('MasterPlay')
        gif.style.opacity=0;
    }
})

//Listen to Events
AudioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress = parseInt((AudioElement.currentTime/AudioElement.duration)* 100);
    MyProgressBar.value = progress;
})

MyProgressBar.addEventListener('change', ()=>{
    AudioElement.currentTime = MyProgressBar.value * AudioElement.duration/100;
})

Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        SongIndex = parseInt(e.target.id);
        MasterSongName.innerText = songs[SongIndex].SongName;
        MasterSongName.innerText = songs[SongIndex].SongName;
        AudioElement.src = `songs/${SongIndex+1}.mp3`;
        AudioElement.currentTime = 0;
        AudioElement.play();
        gif.style.opacity=1;
        MasterPause.classList.remove('MasterPause');
        MasterPlay.classList.add('MasterPlay');
    })
}) 

document.getElementById('next').addEventListener('click', ()=>{
    if(SongIndex>=7){
        SongIndex = 0;
    }
    else{
        SongIndex += 1;
    }
    AudioElement.src = `songs/${SongIndex+1}.mp3`;
    MasterSongName.innerText = songs[SongIndex].SongName;
    AudioElement.currentTime = 0;
    AudioElement.play();
    gif.style.opacity=1;
    MasterPause.classList.remove('MasterPause');
    MasterPlay.classList.add('MasterPlay');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(SongIndex<=0){
        SongIndex = 0;
    }
    else{
        SongIndex -= 1;
    }
    AudioElement.src = `songs/${SongIndex+1}.mp3`;
    MasterSongName.innerText = songs[SongIndex].SongName;
    AudioElement.currentTime = 0;
    AudioElement.play();
    gif.style.opacity=1;
    MasterPause.classList.remove('MasterPause');
    MasterPlay.classList.add('MasterPlay');
})