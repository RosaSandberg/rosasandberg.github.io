function startPlay() {
    var a = document.getElementById("taperecorder").play();
    a.autoplay = true;

    var b = document.getElementById("songtrack").play();
    b.autoplay = true;

    var vinylAudio = document.getElementById("vinylaudio"); 
    vinylAudio.autoplay = true;
    


    var c = document.getElementById("videotrackeffect1").play();
    var d = document.getElementById("videotrackmusicvideo").play();
    vinylAudio.play();



    var e = document.getElementById("prepage-wrapper-id");
    e.classList.add("fade");
    e.classList.add("noevent");

    var f = document.getElementById("mainpage"); 
    f.classList.add("fade");

    var g = document.getElementById("vinylimage");
    g.classList.add("zoom");


    

  

    
  }