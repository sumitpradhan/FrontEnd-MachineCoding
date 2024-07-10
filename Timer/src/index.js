(function(){
    //Getting all the components
    const hr= document.querySelector(".hour")
    const min= document.querySelector(".min")
    const sec= document.querySelector(".sec")

    const startBtn= document.querySelector(".start")
    const stopBtn= document.querySelector(".stop")
    const resetBtn= document.querySelector(".reset")
    
    let countdownTimer = null;
    
        //Start Interval
    const startInterval=()=>{
            countdownTimer=setInterval(()=>{
                startTimer();
            },1000)
        }

    //Clears Interval
    const stopInterval=()=>{
        clearInterval(countdownTimer);
    }

    //Function runes every second
    const startTimer=()=>{               
        if(sec.value>60)
        {
            min.value=min.value+(sec.value/60);
            sec.value=sec.value%60;
        }
        if(min.value>60)
        {
            hr.value=hr.value+(min.value/60);
            min.value=min.value%60;
        }
        if(hr.value==0 && min.value==0 && sec.value==0)
        {
            hr.value = "";
            min.value = "";
            sec.value = "";    
            stopInterval();
        }

        if(sec.value!=0)
        {
            sec.value=`${sec.value<10 ?"0":""}${sec.value-1}`;
        }
        else if(sec.value==0 && min.value!=0)
        {
            sec.value=59;
            min.value=`${min.value<10 ?"0":""}${min.value-1}`;
        }
        else if(min.value==0 && hr.value!=0)
        {
            min.value=59;
            hr.value=`${hr.value<10 ?"0":""}${hr.value-1}`;
        }
    }
    
    //Event Listeners start
    startBtn.addEventListener("click",()=>{
        console.log("start button clicked")
        console.log(hr.value)
        if(hr.value==0 && min.value==0 && sec.value==0)
        {
            return;
        }
        startBtn.style.display="none";
        stopBtn.style.display="initial";
        
        startInterval();
    })

    stopBtn.addEventListener("click",()=>{
        stopInterval();
        startBtn.style.display="initial";
        stopBtn.style.display="none";
    })

    resetBtn.addEventListener("click",()=>{
        hr.value = "";
        min.value = "";
        sec.value = "";

        stopInterval();
    })
        //Event Listeners End

})()