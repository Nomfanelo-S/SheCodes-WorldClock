function updateClock() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do, YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  let lusakaElement = document.querySelector("#lusaka");
  if (lusakaElement) {
    let lusakaDateElement = lusakaElement.querySelector(".date");
    let lusakaTimeElement = lusakaElement.querySelector(".time");
    let lusakaTime = moment().tz("Africa/Lusaka");
    lusakaDateElement.innerHTML = lusakaTime.format("MMMM Do, YYYY");
    lusakaTimeElement.innerHTML = lusakaTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  let dubaiElement = document.querySelector("#dubai");
  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(".date");
    let dubaiTimeElement = dubaiElement.querySelector(".time");
    let dubaiTime = moment().tz("Asia/Dubai");
    dubaiDateElement.innerHTML = dubaiTime.format("MMMM Do, YYYY");
    dubaiTimeElement.innerHTML = dubaiTime.format(
      "H:mm:ss [<small>]A[</small>]"
    );
  }

  let fijiElement = document.querySelector("#fiji");
  if (fijiElement) {
    let fijiDateElement = fijiElement.querySelector(".date");
    let fijiTimeElement = fijiElement.querySelector(".time");
    let fijiTime = moment().tz("Pacific/Fiji");
    fijiDateElement.innerHTML = fijiTime.format("MMMM Do, YYYY");
    fijiTimeElement.innerHTML = fijiTime.format("H:mm:ss [<small>]A[</small>]");
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
            <div class="city">
              <div class="city-date">
                <h2>${cityName}</h2>
                <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
              </div>
              <div class="time">${cityTime.format(
                "H:mm:ss [<small>]A[</small>]"
              )}</div>
            </div>`;
}
updateClock();
setInterval(updateClock, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
