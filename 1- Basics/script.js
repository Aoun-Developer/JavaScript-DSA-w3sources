// 1. Display Current Day and Time

// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

function getCurrentDayAndTime(date = new Date()) {
  const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = allDays[date.getDay()];

  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `Today is : ${day}.\nCurrent time is : ${hours} ${ampm} : ${minutes} : ${seconds}`;
}

// console.log(getCurrentDayAndTime());

function getCurrentDayAndTime2(date = new Date()){
    // getting todays number in array of all days in string
    const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let today = allDays[date.getDay()-1];

    // getting time hour + am/pm + minutes + seconds

    let hours = date.getHours();
    let newHours = hours < 10 ? `0${hours}` : hours;
    let ampm;

    if (hours<= 12){
        ampm = "am";
    }else{
        ampm = "pm";
    }

    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let newSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `Today is : ${today}. \nCurrent time is: ${newHours} ${ampm} : ${minutes} : ${newSeconds}`

}

let abc = getCurrentDayAndTime2();
// console.log(abc)

// ---------------------------------------------------------------------------------------------
// 2. Print Current Window Contents
// Write a JavaScript program to print the current window contents.  
function printWindowContents(){
    document.getElementById("print_btn").addEventListener("click", function(){
        window.print();
    })
}

printWindowContents()