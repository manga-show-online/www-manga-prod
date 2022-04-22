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
        //stop play 2
        if(!audio2.paused) {
            btnPause2.click();
            stopBtn();
        }
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
     let time = document.querySelector(".time");   
     let timeTrack = document.querySelector(".time-track"); 
     let totalTime = document.querySelector(".time-total"); 
     let btnVolume = document.querySelector(".volume");  
     let range = document.getElementById('range'); 
     let rangeLine = document.querySelector('.volume-range-line');
     let timeLine = document.getElementById('range-time'); 
     let minus10 = document.querySelector(".controls-bottom .minus-10"); 
     let plus10 = document.querySelector(".controls-bottom .plus-10"); 
     let rate = document.querySelector(".rate");
     let autoCheck = document.querySelector(".checkbox input");
     let repeatBtn = document.querySelector("button.repeat");
     let repeatBtnSingle = document.querySelector("button.repeat-single");
     let randBtn = document.querySelector("button.rand");
     let btnRateNext = document.querySelector(".controls-bottom .next");   
     let btnRatePrev = document.querySelector(".controls-bottom .prev");
     let repeatTrack = false;
     let randTrack = false;
     
     //tabs
     let tabs = document.querySelectorAll('.titles-tab .tab');
     let tabText = document.querySelectorAll('.tabs .tab');

     function checkInit() {
        if(initVolume) {
            rangeLine.style.width = initVolume + '%';
            range.value = initVolume;
        }
        if(initSpeed) {
            rate.setAttribute('data-rate', initSpeed);
            rate.innerHTML = initSpeed + 'x';
            audio2.playbackRate =initSpeed;
        }
        if(initRepeat == 0) {
            autoCheck.checked = false;
        } 
        if(initRepeat == 1) {
            autoCheck.checked = true;
        }
        if(initRepeatSingle == 1) {
            if(initRepeat == 1) {
                repeatBtnSingle.classList.remove('d-none');
                repeatBtnSingle.classList.add('active');
                repeatBtn.classList.add('d-none');
                repeatTrack = true;
            }
        } 
        if(initRepeatSingle == 0) {
            if(initRepeat == 1) {
                repeatTrack = false;
                repeatBtnSingle.classList.add('d-none');
                repeatBtnSingle.classList.remove('active');
                repeatBtn.classList.remove('d-none');
                repeatBtn.classList.add('active');
            }
        } 
        if(initShuffle == 1) {
            if(initRepeat == 1) { 
                randTrack = true;
                randBtn.classList.add('active');
            }
        } 
        if(initShuffle == 0) {
            if(initRepeat == 1) { 
                randTrack = false;
                randBtn.classList.remove('active');
            }
        } 
        checkAuto();
     }


     function checkAuto() {
        if(autoCheck.checked) {
            repeatBtn.classList.remove('not-active');
            repeatBtn.classList.add('active');
            randBtn.classList.remove('not-active');
        } else {
            repeatBtn.classList.add('not-active');
            repeatBtn.classList.remove('active');
            repeatBtn.classList.remove('d-none');
            repeatBtnSingle.classList.add('d-none');
            randBtn.classList.add('not-active');
            randBtn.classList.remove('active');
        }
     }

     checkInit();

     autoCheck.addEventListener('change', function() {
        checkAuto();
     });

     repeatBtn.addEventListener('click', function() {
        repeatBtnSingle.classList.remove('d-none');
        repeatBtnSingle.classList.add('active');
        repeatBtn.classList.add('d-none');
        repeatTrack = true;
     });

     repeatBtnSingle.addEventListener('click', function() {
        repeatTrack = false;
        repeatBtnSingle.classList.add('d-none');
        repeatBtnSingle.classList.remove('active');
        repeatBtn.classList.remove('d-none');
        repeatBtn.classList.add('active');
     });

     randBtn.addEventListener('click', function() {
        if(randTrack) {
            randTrack = false;
            randBtn.classList.remove('active');
        } else {
            randTrack = true;
            randBtn.classList.add('active');
        }
     });

     function getRandomInt(max) {
        return Math.floor(Math.random() * max);
     }
     

     btnPlay2.addEventListener("click", function() {
        audio2.play(); 
        range.onchange();
        //stop play 1
        btnPause.click();
        //follow treck
        audioPlay2 = setInterval(function() {
            getPercent();
        }, 10);
        btnPlay2.classList.add('d-none');
        btnPause2.classList.remove('d-none');
        minus10.classList.remove('not-active');
        plus10.classList.remove('not-active');
        btnRateNext.classList.remove('not-active');
        btnRatePrev.classList.remove('not-active');
    });

    function getPercent() {
        let audioTime = Math.round(audio2.currentTime);
        let audioLength = Math.round(audio2.duration);
        let percent = ((audioTime * 100) / audioLength).toFixed(2);
        time.style.width = percent + '%';
        formatSecondsAsTime(audioTime, audioLength);
        //then finish treck
        if (audioTime == audioLength) {
            if(autoCheck.checked) {
                if(repeatTrack) {
                    switchTreck(treck);
                } else {
                    if(randTrack) {
                        treck = getRandomInt(total);
                        switchTreck(treck);
                    } else {
                        if(treck < total) {
                            treck++;
                        } else {
                            treck = 0;
                        }
                        switchTreck(treck);
                    }
                }
                
            } else {
                audio2.pause();
                clearInterval(audioPlay2);
                stopBtn();
            }
        }
        
     }

    function formatSecondsAsTime(secs, secs2) {
        let hr  = Math.floor(secs / 3600);
        let min = Math.floor((secs - (hr * 3600))/60);
        let sec = Math.floor(secs - (hr * 3600) -  (min * 60));
        let hr2  = Math.floor(secs2 / 3600);
        let min2 = Math.floor((secs2 - (hr2 * 3600))/60);
        let sec2 = Math.floor(secs2 - (hr2 * 3600) -  (min2 * 60));
      
        (min < 10) ? (min = "0" + min) : min;
        (min2 < 10) ? (min2 = "0" + min2) : min2;
        (sec < 10) ? (sec  = "0" + sec) : sec;
        (sec2 < 10) ? (sec2  = "0" + sec2) : sec2;
      
        timeTrack.innerHTML = min + ':' + sec;
        totalTime.innerHTML = min2 + ':' + sec2;
    }

    function stopBtn() {
        btnPlay2.classList.remove('d-none');
        btnPause2.classList.add('d-none');
        minus10.classList.add('not-active');
        plus10.classList.add('not-active');
        btnRateNext.classList.add('not-active');
        btnRatePrev.classList.add('not-active');
    }

    btnPause2.addEventListener("click", function() {
        audio2.pause(); 
        clearInterval(audioPlay2);
        stopBtn();
    });

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


    btnVolume.addEventListener("click", function() {
        if(audio2.muted == true) {
            audio2.muted=false;
            rangeLine.style.width = 100 + '%';
            range.value = 100;
            range.onchange();
            document.querySelector(".controls-bottom .volume-on").classList.remove('d-none'); 
            document.querySelector(".controls-bottom .volume-off").classList.add('d-none'); 
        } else {
            audio2.muted=true;
            rangeLine.style.width = 0 + '%';
            range.value = 0;
            range.onchange();
            document.querySelector(".controls-bottom .volume-on").classList.add('d-none'); 
            document.querySelector(".controls-bottom .volume-off").classList.remove('d-none'); 
        }
    });

    range.onchange = function(){
        let current = this.value;
        audio2.volume = current/100;
        rangeLine.style.width = current + '%';
    }

    timeLine.onchange = function(){
        let timeRange = this.value;        
        let audioLength = Math.round(audio2.duration);
        let audioTime = (timeRange * audioLength) / 100;
        audio2.currentTime = audioTime;
        time.style.width = timeRange + '%';
        formatSecondsAsTime(audioTime, audioLength);
    }

    function switchTreck (numTreck) {
        changeTab(numTreck);
        numTreck++;
        let srcTrack = document.querySelector('source[data-track-number="' + numTreck + '"]');
        srcTrack = srcTrack.getAttribute('src');
        audio2.src = srcTrack;
        audio2.currentTime = 0;
        audio2.playbackRate = rate.getAttribute('data-rate');
        audio2.play();
        
    }

    plus10.addEventListener('click', function() {
        let audioTime = Math.round(audio2.currentTime);
        audioTime = audioTime + 10;
        audio2.currentTime = audioTime;
    });

    minus10.addEventListener('click', function() {
        let audioTime = Math.round(audio2.currentTime);
        audioTime = audioTime - 10;
        audio2.currentTime = audioTime;
    });

    rate.addEventListener('click', function() {
        let rateNum = this.getAttribute('data-rate');
        if(rateNum != 2) {
            rateNum = parseFloat(rateNum) + 0.5;
        } else {
            rateNum = 1;
        }
        this.setAttribute('data-rate', rateNum);
        rate.innerHTML = rateNum + 'x';
        audio2.playbackRate = rateNum;
    });
   

    //tabs
    let startText = document.querySelector('.treck-name');
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
            audio2.playbackRate = rate.getAttribute('data-rate');
            btnPlay2.classList.remove('d-none');
            btnPause2.classList.add('d-none');
            minus10.classList.add('not-active');
            plus10.classList.add('not-active');
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
            minus10.classList.add('not-active');
            plus10.classList.add('not-active');
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
        document.title = tabs[i].innerText.toUpperCase() + ' .:. ' + domain.toUpperCase();
    }

    //get url & change tab
    let hashID = document.location.hash;
    for (let i=0; i<tabs.length;i++) {
        let hrefTab = tabs[i].getAttribute('href');
        if(hrefTab == hashID) {
            let n = i;
            ++n;
            changeTab(i);
            let srcTrack = document.querySelector('source[data-track-number="' + n + '"]');
            treck = --n;
            srcTrack = srcTrack.getAttribute('src');
            audio2.src = srcTrack;
            audio2.currentTime = 0;
            audio2.playbackRate = rate.getAttribute('data-rate');
            btnPlay2.classList.remove('d-none');
            btnPause2.classList.add('d-none');
            minus10.classList.add('not-active');
            plus10.classList.add('not-active');
            return false;
        }
    }
 
}