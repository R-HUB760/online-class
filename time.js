let day = document.querySelector(".day");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

function examTime(){
  let days = new Date("August 17, 2022 21:00:00");
  let currentDate = new Date();
  let totalTime = days - currentDate;

  let secondsT = Math.floor(totalTime / 1000);
  let munitesT = Math.floor(secondsT / 60);
  let hoursT = Math.floor(munitesT / 60);

  let DayT = Math.floor(hoursT / 24);
  let HoursTime = hoursT % 24;
  let MinutesTime = munitesT % 60;
  let SecondsTime = secondsT % 60;

  day.innerHTML = DayT;
  hours.innerHTML = HoursTime;
  minutes.innerHTML = MinutesTime;
  seconds.innerHTML = SecondsTime;

}

examTime();

setInterval(examTime, 1000);

// Year for footer
let year = document.querySelector('#year');

let yearT = new Date();
let currentYear = yearT.getFullYear();

year.innerHTML = currentYear;

// Class lists

let classListShow = document.querySelector('.listOfClass');

function classLists(lists, num, title){
  
classListShow.innerHTML += `<col class="m-4"><a class="bg-secondary text-light p-2 fs-4" href="${lists}" title="${title}"> Class-${num} </a></col>`;

  return classListShow;
}
classLists('https://scrimba.com/scrim/cWg4bdSd?a=979.0.1.L45_8',1);

classLists('https://scrimba.com/scrim/crRe4gC6?a=86.14.1.L8_9','2');

classLists('https://scrimba.com/scrim/cNNvMwhZ?a=19.0.1.L8_9','3');

classLists('https://scrimba.com/scrim/cqDgnmuN?a=160.3779.1.L6_44','4');

classLists('https://scrimba.com/scrim/cPW773Cv?a=146.0.1.L10_19-10_31','5', 'Advance Link');

classLists('https://scrimba.com/scrim/cPPredCD?a=19152.0.1.L23_41','6', 'HTML Forms');
