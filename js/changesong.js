


var tapeRecorder =   document.getElementById("taperecorder");
var songTitle = document.getElementById("songtitle");

var songPlayer = document.getElementById("songtrack");


var vinylimage = document.getElementById("vinylimage");

var playingText = document.getElementById("playing");

var songvideoPlayer = document.getElementById("songvideoplayer");


/*
const songUrl = [

    "audio/songs/falseflagbyenterme.mp3", 
    "audio/songs/newnarcissimbyeckotrigger.mp3",
    "/audio/songs/burninglovebycoldconnection.mp3", 
    "audio/songs/likeapinballbysplit.mp3", 
    "audio/songs/notfromthesunbycoolmowee.mp3", 
    "audio/songs/waitinggamebyeeman.mp3"
]
*/

const videoUrl = 
    [
        
        "video/songvideos/falseflagmusicvideo.mp4",
        "video/songvideos/newnarcissimeckotrigger.mp4",
        "video/songvideos/notfromthesunmusicvideo.mp4",
        "video/songvideos/burninglovemusicvideo.mp4",
        "video/songvideos/splitvisionlikeapinballmusicvideo.mp4",

    ]

const songTitles = 
[
    "FALSE FLAG - ENTER.ME",
    "NEW NARCISSIM ECKOTRIGGER",
    "NOT FROM THE SUN - COOLMOWEE",
    "BURNING LOVE - COLD CONNECTION",
    "LIKE A PINBALL - SPLIT VISION",

]


function muteIntrosong() 
{
    songPlayer.pause();
    console.debug("EXECUTED!")
}

var index = 0;

function cycleSongs() 
{
    playingText.style.display = "block";

    vinylimage.classList.remove("vinyltransition");
    songTitle.classList.remove("fade");
    
    
    if (index >= (videoUrl.length -1)) 
    {
        index = 0;
    } 
    else 
    {
        index++;
    }




    console.log(index);
    //songPlayer.src= songUrl[index];

    songvideoPlayer.src = videoUrl[index];

    //songPlayer.play();


    tapeRecorder.currentTime=0;
    tapeRecorder.play();

    songTitle.textContent= songTitles[index];
    songTitle.classList.add("fade");

    vinylimage.classList.add("vinyltransition");


    

    
        
}

