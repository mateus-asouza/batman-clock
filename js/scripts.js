const hourHand = document.querySelector(".hand.hours");
const minuteHand = document.querySelector(".hand.minutes");
const secondHand = document.querySelector(".hand.seconds");
const dateDisplay = document.querySelector(".date");
const dayInMilliseconds = 1000 * 60 * 60 * 24;

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const secondsPercentage = currentDate.getSeconds() / 60;
  const minutesPercentage = currentDate.getMinutes() / 60;
  const hoursPercentage = currentDate.getHours() / 12;

  setRotation(secondHand, secondsPercentage);
  setRotation(minuteHand, minutesPercentage);
  setRotation(hourHand, hoursPercentage);
};

const setDate = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  dateDisplay.firstElementChild.innerHTML = `${day}/${month}/${year}`;
};

setClock();

setInterval(setClock, 1000);

setDate();

setInterval(setDate, dayInMilliseconds);
