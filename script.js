// Added a script that alerts users the left duration

let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance/(1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("duration").innerHTML = days + "d" + " " + hours + "h" + " left";
    if (distance<0){
        clearInterval(x);
        document.getElementById("duration").innerHTML="EXPIRED";
    }
}, 1000);