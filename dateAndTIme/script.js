function updateClock() {const timeElement=document.getElementById("time");
const dateElement=document.getElementById("date");
const now=new Date()
console.log(now.__proto__);
const hours=now.getHours()%12 || 12;
const minutes=now.getMinutes().toString().padStart(2,"0");

// if(minutes<10 && minutes>=0){
//     minutes="0"+minutes;
// }
console.log(minutes);
// This will not work as const can't change
const seconds=now.getSeconds();
const amPm=now.getHours()>=12?"AM":"PM"

timeElement.textContent=`${hours}:${minutes}:${seconds}:${amPm}`;

const options={
    weekday:"long",
    year:"numeric",
    month:"long",
    day:"numeric",
};
dateElement.textContent=now.toLocaleString(undefined,options)
}
setInterval(updateClock,1000);
updateClock();