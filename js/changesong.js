


var tapeRecorder =   document.getElementById("taperecorder");
var songTitle = document.getElementById("songtitle");

var songPlayer = document.getElementById("songtrack");
var videoPlayer = document.getElementById("videotrackmusicvideo");

var vinylimage = document.getElementById("vinylimage");

var playingText = document.getElementById("playing");


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
        "video/songvideos/newnarcissimeckotrigger.mp4",
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
    videotrackmusicvideo.src= videoUrl[index];

    songPlayer.play();
    videotrackmusicvideo.play();


    tapeRecorder.currentTime=0;
    tapeRecorder.play();

    songTitle.textContent= songTitles[index];
    songTitle.classList.add("fade");

    vinylimage.classList.add("vinyltransition");


    

    
        
}

