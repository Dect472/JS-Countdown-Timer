const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const inputYears = 0;
const newYears = '1 Jan 2024';

function countDown(){
    //const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    let inputEl = "" + (document.getElementById('inputDate').value);

    if(!inputEl.trim().length) return 
    else{
        const targetDate = new Date(inputEl);

        const totalSeconds = (targetDate-currentDate - 9*60*60*1000) / 1000;
        if(totalSeconds < 0){
            const days= 0;
            const hours = 0;
            const mins = 0;
            const seconds = 0;
            console.log(days, hours, mins, seconds);

            daysEl.innerHTML = formatTime(days);
            hoursEl.innerHTML = formatTime(hours);
            minsEl.innerHTML = formatTime(mins);
            secondsEl.innerHTML = formatTime(seconds);
        }
        else{
            const days= Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const mins = Math.floor(totalSeconds/ 60) % 60;
            const seconds = Math.floor(totalSeconds % 60);
            console.log(days, hours, mins, seconds);

            daysEl.innerHTML = formatTime(days);
            hoursEl.innerHTML = formatTime(hours);
            minsEl.innerHTML = formatTime(mins);
            secondsEl.innerHTML = formatTime(seconds);
        } 
    }
}

const buttonEl = document.getElementById('button1');
buttonEl.addEventListener('click', ()=>{
    let topDescription = document.getElementById('whatDay');
    let dayDescription = document.getElementById('whatDayinput').value;
    console.log(dayDescription);
    topDescription.innerText= dayDescription;
})

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

//initial call to actual function
countDown();

setInterval(countDown, 1000);
