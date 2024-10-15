let startBtn = document.querySelector(".startbtn ");
let stopBtn = document.querySelector(".stoptbtn ");
let resetBtn = document.querySelector(".resetbtn ");
let countStart  = document.querySelector(".countDowne ");
let getBtn  = document.querySelector(".get ");
let clearBtn  = document.querySelector(".clear ");
let textBtn  = document.querySelector(".text ");

// start function...................................

let count = 0;
let intervalID;
const  countDowneStart = ()=> {
    intervalID= setInterval( () =>{
    countStart.innerText = count++;
   },1000);   
};
startBtn.addEventListener("click",()=>{
    countDowneStart()
});

// stop function.......................................

const StopBtnColled = ()=>{
 clearInterval(intervalID);
}
stopBtn.addEventListener("click",()=>{
    StopBtnColled();
});

//resetbutton function................................

const resetBtnactive = ()=>{
    count = 0;
    countStart.innerText = count;
    clearInterval(intervalID);
};
resetBtn.addEventListener("click",()=>{
    resetBtnactive();
});

// gettime function...................................

const achiveGetTime =  ()=>{
    let creatPara = document.createElement("p");
    creatPara.innerText=`the stop time is ${count-1}`;
    textBtn.append(creatPara);
};
getBtn.addEventListener("click",()=>{
    achiveGetTime();
});

// cleartime function................................

const clearStopTime = ()=>{
    textBtn.innerText="";
}
clearBtn.addEventListener("click",()=>{
    clearStopTime();
})

