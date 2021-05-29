// var age = prompt("Enter your age ",18);
// var gender = prompt("Enter your grnder ","Male");
// var religon = prompt("Enter your religon ","Islam");
// if(age >= 18 && gender == "Male" && religon == "Islam") {
//     document.write("you are eligible to ride");
// }
// else if(age >= 18 && gender == "Male" && religon != "Islam"){
//     document.write("Religion are not same")
// }
// else{
//     document.write("Only man allow to elegible")
// }

// function timer(){
//     console.log("Running")
// }
// setInterval(timer,1000)
// function timer1(){
//     console.log("Running123")
// }
// setTimeout(timer1,1000)



var min = 0;
var sec = 0;
var mSec = 0;
var interval;

var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var mSecHead = document.getElementById("msec");
var disbtn = document.getElementById("dis")

function timer() {
    mSec++;
    mSecHead.innerHTML = mSec;
    if (mSec == 100) {
        sec++
        secHead.innerHTML = sec;
        mSec = 0;
    }
    else if (sec == 60) {
        min++;
        minHead.innerHTML = min;
        sec = 0;
    }
}

// interval = setInterval(timer,10)

function start(){
    interval = setInterval(timer,10)
    disbtn.disabled = true;
    disbtn.style.opacity = "0.1";

}


function pause(){
    // interval = clearInterval(timer,10)
    clearInterval(interval)
    disbtn.disabled = false;
    disbtn.style.opacity = "1";

}

function reset() {
    clearInterval(interval)
    min = 0;
    sec = 0;
    mSec = 0;
    mSecHead.innerHTML = mSec;
    secHead.innerHTML = sec;
    minHead.innerHTML = min;

    disbtn.disabled = false;
    disbtn.style.opacity = "1";
}