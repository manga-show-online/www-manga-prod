window.onload = function() {

    function setHeight() {
        let letters = document.querySelectorAll('.letter');
        let windowHeight = window.innerHeight;
        for (let i=0; i<letters.length;i++) {
            let line = letters[i].querySelector('.letter__d');

            let heightAll = letters[i].clientHeight;
            let heightLine;
            if (i == 2) {
                heightLine = parseInt(heightAll) * 0.15;
                if(windowHeight < 994 && windowHeight > 889) {
                    heightLine = parseInt(heightAll) * 0.1;
                }
                if(windowHeight < 850 && windowHeight > 669) {
                    heightLine = parseInt(heightAll) * 0.1;
                }
            } else {
                heightLine = parseInt(heightAll) * 0.25;
                if(windowHeight < 1068 && windowHeight > 993) {
                    heightLine = parseInt(heightAll) * 0.2;
                }
                if(windowHeight < 994 && windowHeight > 889) {
                    heightLine = parseInt(heightAll) * 0.12;
                }
                if(windowHeight < 850 && windowHeight > 669) {
                    heightLine = parseInt(heightAll) * 0.12;
                }
            }
            
            heightLine = parseInt(heightLine);

            line.style.height = heightLine + "px";

            
        }
    }
    
    setHeight();

    window.addEventListener('resize', function(event) {
        setHeight();
    }, true);

    //scroll
    let down = document.querySelector('.transfer .down');
    down.addEventListener("click", function(e) {
        e.preventDefault();
        let scrollTarget = document.querySelector('.middle');
        scrollTarget.scrollIntoView();
    });

    //player 1
    let audio = document.getElementById("audio-top");         
    let btnPlay = document.querySelector(".controls-top .play");   
    let btnPause = document.querySelector(".controls-top .pause"); 
    let btnRateMinus = document.querySelector(".controls-top .minus");   
    let btnRatePlus = document.querySelector(".controls-top .plus");  
    let btnVolumeTop = document.querySelector(".volume-top");  

    btnPlay.addEventListener("click", function() {
        audio.play(); 
        btnPlay.classList.add('d-none');
        btnPause.classList.remove('d-none');
        btnRateMinus.classList.remove('not-active');
        btnRatePlus.classList.remove('not-active');
    });

    btnPause.addEventListener("click", function() {
        audio.pause(); 
        btnPlay.classList.remove('d-none');
        btnPause.classList.add('d-none');
        btnRateMinus.classList.add('not-active');
        btnRatePlus.classList.add('not-active');
    });

    btnRatePlus.addEventListener("click", function() {
        let rate = audio.playbackRate;
        if(rate < 2) {
            rate = rate + 0.5;
        }
        audio.playbackRate=rate;
    });

    btnRateMinus.addEventListener("click", function() {
        let rate = audio.playbackRate;
        if(rate > 0) {
            rate = rate - 0.5;
        }
        audio.playbackRate=rate;
    });

    btnVolumeTop.addEventListener("click", function() {
        if(audio.muted == true) {
            audio.muted=false;
            document.querySelector(".volume-on").classList.remove('d-none'); 
            document.querySelector(".volume-off").classList.add('d-none'); 
            
        } else {
            audio.muted=true;
            document.querySelector(".volume-on").classList.add('d-none'); 
            document.querySelector(".volume-off").classList.remove('d-none'); 
        }
    });

     //player 2
     let sources = document.querySelectorAll("#playlist source");   
     let treck = 0;
     let total = --sources.length;
     let audio2 = document.getElementById("playlist");         
     let btnPlay2 = document.querySelector(".controls-bottom .play");   
     let btnPause2 = document.querySelector(".controls-bottom .pause"); 
     let btnRateNext = document.querySelector(".controls-bottom .next");   
     let btnRatePrev = document.querySelector(".controls-bottom .prev"); 
     let time = document.querySelector(".time");   
     let timeTrack = document.querySelector(".time-track"); 
     let btnVolume = document.querySelector(".volume");  
     let range = document.getElementById('range'); 
     
     //tabs
     let tabs = document.querySelectorAll('.titles-tab .tab');
     let tabText = document.querySelectorAll('.tabs .tab');
     

     btnPlay2.addEventListener("click", function() {
        audio2.play(); 
        audioPlay2 = setInterval(function() {
            let audioTime = Math.round(audio2.currentTime);
            let audioLength = Math.round(audio2.duration)
            time.style.width = (audioTime * 100) / audioLength + '%';
            formatSecondsAsTime(audioTime);
            //then finish treck
            if (audioTime == audioLength && treck < total) {
                treck++;
                switchTreck(treck); 
            } else if (audioTime == audioLength && treck >= total) {
                treck = 0;
                switchTreck(treck);
            }
        }, 10);
        btnPlay2.classList.add('d-none');
        btnPause2.classList.remove('d-none');
        btnRateNext.classList.remove('not-active');
        btnRatePrev.classList.remove('not-active');
    });

    function formatSecondsAsTime(secs) {
        var hr  = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600))/60);
        var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
      
        if (min < 10){ 
          min = "0" + min; 
        }
        if (sec < 10){ 
          sec  = "0" + sec;
        }
      
        timeTrack.innerHTML = min + ':' + sec;
    }

    btnPause2.addEventListener("click", function() {
        audio2.pause(); 
        clearInterval(audioPlay2);
        btnPlay2.classList.remove('d-none');
        btnPause2.classList.add('d-none');
        btnRateNext.classList.add('not-active');
        btnRatePrev.classList.add('not-active');
    });

    btnVolume.addEventListener("click", function() {
        if(audio2.muted == true) {
            audio2.muted=false;
            document.querySelector(".volume-on").classList.remove('d-none'); 
            document.querySelector(".volume-off").classList.add('d-none'); 
        } else {
            audio2.muted=true;
            document.querySelector(".volume-on").classList.add('d-none'); 
            document.querySelector(".volume-off").classList.remove('d-none'); 
        }
    });

    range.onchange = function(){
        let current = this.value;
        audio2.volume = current/100;
    }

    function switchTreck (numTreck) {
        changeTab(numTreck);
        numTreck++;
        let srcTrack = document.querySelector('source[data-track-number="' + numTreck + '"]');
        srcTrack = srcTrack.getAttribute('src');
        audio2.src = srcTrack;
        audio2.currentTime = 0;
        audio2.play();
        
    }

    btnRateNext.addEventListener('click', function() {
        if (treck < total) { 
            treck++; 
            switchTreck(treck); 
        } else { 
            treck = 0; 
            switchTreck(treck);
        }
    });

    btnRatePrev.addEventListener("click", function() {
        if (treck > 0) {
            treck--;
            switchTreck(treck);
        } else { 
            treck = total; 
            switchTreck(treck);
        }
    });

    //tabs
    let startText = document.querySelector('.audio-start');
    for (let i=0; i<tabs.length;i++) {
        tabs[i].addEventListener("click", function(e) {
            let n = i;
            ++n;
            changeTab(i);
            treck = n;
            let srcTrack = document.querySelector('source[data-track-number="' + n + '"]');
            srcTrack = srcTrack.getAttribute('src');
            audio2.src = srcTrack;
            audio2.currentTime = 0;
            btnPlay2.classList.remove('d-none');
            btnPause2.classList.add('d-none');
            btnRateNext.classList.add('not-active');
            btnRatePrev.classList.add('not-active');
            return false;
        });
    }

    let buttonsNextChapter = document.querySelectorAll('.next-chapter a');
    for (let i=0; i<buttonsNextChapter.length;i++) {
        buttonsNextChapter[i].addEventListener('click', function(e) {
            e.preventDefault;
            let n = i;
            ++n;
            changeTab(n);
            treck = n;
            let srcTrack = document.querySelector('source[data-track-number="' + n + '"]');
            srcTrack = srcTrack.getAttribute('src');
            audio2.src = srcTrack;
            audio2.currentTime = 0;
            btnPlay2.classList.remove('d-none');
            btnPause2.classList.add('d-none');
            btnRateNext.classList.add('not-active');
            btnRatePrev.classList.add('not-active');
        });
    }

    function changeTab(i) {
        tabs[i].classList.add('active');
        tabText[i].classList.add('active');
        let text = tabs[i].innerHTML;
        startText.innerHTML = text;
        for (let m=0; m<tabs.length;m++) {
            if(i != m) {
                tabs[m].classList.remove('active');
            }
        }
        for (let m=0; m<tabText.length;m++) {
            if(i != m) {
                tabText[m].classList.remove('active');
            }
        }
    }

    

 
}