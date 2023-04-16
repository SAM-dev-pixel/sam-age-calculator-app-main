const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const submitButton = document.querySelector(".submit-btn");
const dayText = document.querySelector(".day-txt span");
const monthText = document.querySelector(".month-txt span");
const yearText = document.querySelector(".year-txt span");

submitButton.addEventListener("click", () => {
  const currentYear = new Date().getFullYear();
  const getYear = currentYear - Number(yearInput.value);
  yearText.textContent = getYear;
});
