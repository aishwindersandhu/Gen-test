/*
* Write a function that will take a date and compare with today date and return text:
* - Today: same year, same month, same date
* - Yesterday: date = today - 1
* - This week: today - 7 < date < today - 1
* - Last week: today - 14 < date <= today - 7
* - This month: same year, same month, date <= today - 14
* - Last month: month = current month - 1
* - This year: same year
* - last year: year = current year - 1
* - Long time ago: everything else
*
* Lastly, please write a unit test for calculateRelativeDate function
* */

const calculateRelativeDate = (inputDate) => {
  const today_date = new Date().getDate();
  const today_month = new Date().getUTCMonth() + 1;
  const today_year = new Date().getFullYear();

  const relativeDate = new Date(inputDate).getDate();
  const relativeMonth = new Date(inputDate).getUTCMonth() + 1;
  const relativeYear = new Date(inputDate).getFullYear();

  let date_string = '';
  if (today_date == relativeDate &&
    today_month == relativeMonth &&
    today_year == relativeYear) {
    date_string = "Today";
  }
  else if (((today_date - 1 > relativeDate) && (relativeDate > today_date - 7)) &&
    today_month == relativeMonth &&
    today_year == relativeYear) {
    date_string = "This week";
  }
  else if ((relativeDate <= today_date - 14) &&
    today_month == relativeMonth &&
    today_year == relativeYear) {
    date_string = "This month";
  }
  else if (((today_date - 7 > relativeDate) && (relativeDate > today_date - 14)) &&
    today_month == relativeMonth &&
    today_year == relativeYear) {
    date_string = "Last week";
  }
  else if (today_month - 1 == relativeMonth) {
    date_string = "Last month";
  }
  else if (today_year - 1 == relativeYear) {
    date_string = "Last Year";
  }
  else if (today_date - 1 == relativeDate &&
    today_month == relativeMonth &&
    today_year == relativeYear) {
    date_string = "Yesterday";
  }
  else {
    date_string = "Long Time Ago";
  }
  return date_string;
};
const View = {
  init: () => {
    document.getElementById('relative-date-btn').addEventListener('click', () => {
      const msgElement = document.getElementById('relative-date-msg');
      const inputDateElem = document.getElementById('relative-date-input');
      msgElement.textContent = calculateRelativeDate(inputDateElem.value);
    });
  }
};

document.addEventListener('DOMContentLoaded', View.init);
export { calculateRelativeDate };
