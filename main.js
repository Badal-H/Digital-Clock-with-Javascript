function digitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeformat = 'AM'
    if(hours===0){
        hours  = 12;
    }
    if(hours>12){
        hours = hours - 12;
        timeformat = 'PM'
    }
    hours = hours<10 ? '0'+hours : hours;
    minutes = minutes<10 ? '0'+minutes : minutes;
    seconds = seconds<10 ? '0'+seconds : seconds;
    let finaltime = `${hours}:${minutes}:${seconds}`
    document.getElementById('time').innerText = finaltime;
    document.querySelector('small').innerText = timeformat;
    setTimeout(digitalClock, 1000)
}
digitalClock();