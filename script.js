const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const submitButton = document.querySelector(".submit-btn");
const dayText = document.querySelector(".day-txt span");
const monthText = document.querySelector(".month-txt span");
const yearText = document.querySelector(".year-txt span");

submitButton.addEventListener("click", () => {
  // ageCalculator("10/06/2001");
  ageCalculator(`${monthInput.value}/${dayInput.value}/${yearInput.value}`);
});
// var dob = new Date("06/24/2008");
// const dob = new Date("06/10/2001");
// const monthDiff = Date.now() - dob.getTime();
// const ageDate = new Date(monthDiff)
// const year = ageDate.getUTCFullYear()
// const month = ageDate.getUTCMonth()
// const age = Math.abs(year - 1970);
// const m = Math.abs(month)
// console.log(m)
function ageCalculator(birth) {
  //collect input from HTML form and convert into date format
  const userBirth = birth;
  const dob = new Date(userBirth);
  //check user provide input or not
  if (userBirth == null || userBirth == "") {
    alert("**Choose a date please!");
    return false;
  }
  //execute if user entered a date
  else {
    //extract and collect only date from date-time string
    const mdate = userBirth.toString();
    const dobYear = parseInt(mdate.substring(6), 10);
    const dobMonth = parseInt(mdate.substring(0, 2), 10);
    const dobDate = parseInt(mdate.substring(3, 5), 10);

    //get the current date from system
    const today = new Date();
    //date string after broking
    const birthday = new Date(dobYear, dobMonth - 1, dobDate);
    //calculate the difference of dates
    const diffInMillisecond = today.valueOf() - birthday.valueOf();
    //convert the difference in milliseconds and store in day and year variable
    const yearAge = Math.floor(diffInMillisecond / 31536000000);
    const dayAge = Math.floor((diffInMillisecond % 31536000000) / 86400000);
    //when birth date and month is same as today's date
    if (
      today.getMonth() == birthday.getMonth() &&
      today.getDate() == birthday.getDate()
    ) {
      alert("Happy Birthday!");
    }
    const monthAge = Math.floor(dayAge / 30);
    const dayAgeDayAge = dayAge % 30;

    const tMnt = monthAge + yearAge * 12;
    const tDays = tMnt * 30 + dayAge;

    //DOB is greater than today's date, generate an error: Invalid date
    if (dob > today) {
      alert("Invalid date input - Please try again!");
    } else {
      // return yearAge + " years " + monthAge + " months " + dayAgeDayAge + " days";
      document.querySelector(".day-txt span").textContent = dayAgeDayAge;
      document.querySelector(".month-txt span").textContent = monthAge;
      document.querySelector(".year-txt span").textContent = yearAge;
    }
  }
}