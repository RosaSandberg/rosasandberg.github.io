


var tapeRecorder =   document.getElementById("taperecorder");
var songTitle = document.getElementById("songtitle");

var songPlayer = document.getElementById("songtrack");


var vinylimage = document.getElementById("vinylimage");

var playingText = document.getElementById("playing");

var youtubeVideoplayer = document.getElementById("youtubevideotrack");


const songUrl = [

    "audio/songs/falseflagbyenterme.mp3", 
    "audio/songs/newnarcissimbyeckotrigger.mp3",
    "/audio/songs/burninglovebycoldconnection.mp3", 
    "audio/songs/likeapinballbysplit.mp3", 
    "audio/songs/notfromthesunbycoolmowee.mp3", 
    "audio/songs/waitinggamebyeeman.mp3"
]

const videoUrl = 
    [
        
        "video/songvideos/falseflagmusicvideo.mp4",
        "https://www.youtube.com/watch?v=qqOpZSuXeXs",
        "video/songvideos/burninglovemusicvideo.mp4",
        "video/songvideos/splitvisionlikeapinballmusicvideo.mp4",
        "video/songvideos/notfromthesunmusicvideo.mp4",
        "video/songvideos/waitinggamemusicvideo.mp4"
    ]

const songTitles = 
[
    "FALSE FLAG - ENTER.ME",
    "NEW NARCISSIM ECKOTRIGGER",
    "BURNING LOVE - COLD CONNECTION",
    "LIKE A PINBALL - SPLIT VISION",
    "NOT FROM THE SUN - COOLMOWEE",
    "WAITING GAME - EEM:AN"
]

const youtubeUrl = 
[
    "https://www.youtube.com/embed/4zshOu0yCyQ?controls=0rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1",
    "https://www.youtube.com/embed/qqOpZSuXeXs?controls=0rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1",
    "https://www.youtube.com/embed/G8S6duXu6ko?controls=0rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1",
    "https://www.youtube.com/embed/_8pPhTx8_Lw?controls=0rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1",
    "https://www.youtube.com/embed/m0z36k84Yog?controls=0rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1",
    "https://www.youtube.com/embed/3jwetUj17ms?controls=0rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1",


]


var index = 0;

function cycleSongs() 
{
    playingText.style.display = "block";

    vinylimage.classList.remove("vinyltransition");
    songTitle.classList.remove("fade");
    
    
    if (index >= (songUrl.length -1)) 
    {
        index = 0;
    } 
    else 
    {
        index++;
    }




    console.log(index);
    songPlayer.src= songUrl[index];

    youtubeVideoplayer.src = youtubeUrl[index];

    songPlayer.play();


    tapeRecorder.currentTime=0;
    tapeRecorder.play();

    songTitle.textContent= songTitles[index];
    songTitle.classList.add("fade");

    vinylimage.classList.add("vinyltransition");


    

    
        
}

