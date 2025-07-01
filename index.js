let btnSearch = document.getElementById("btnSearch")
let searchInput = document.getElementById("searchInput")
DaysWeather(country="Cairo")
btnSearch.addEventListener("click", function(){
DaysWeather(searchInput.value)
})
async function DaysWeather(country) {
let weather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=195476a2f70e423a922153815252906&q=${country}&days=3`);  
  let apiData = await weather.json();

  let weatherData = apiData;
  console.log(weatherData);

  display(weatherData)
}

function display(weatherData) {
  let cartona = '';
  for (let i = 0; i < weatherData.forecast.forecastday.length; i++) {
    const Data = new Date(weatherData.forecast.forecastday[i].date)//    نجيب منو ساعه واسم الشهر والتاريخ  objectهنا بنحول التاريخ ل 
    let montNumber = Data.getMonth() //بستخدم عشان تجيب رقم الشهر الي احنا في getmonth 
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Arry Months
    let name = month[montNumber]
    let dayIndex = Data.getDay()
    let daysWeek = weekday[dayIndex]

    //هنا بقول روح لللاراي هاتلي منها رقم الاندكس بتاعها

    console.log(Data)



    cartona += `

    <div class="col-md-4">
        <div class="container">
          <div class="card bg-dark">
            <div class="card-header hedar  d-flex justify-content-between">
               <div class="day text-secondary ">${daysWeek}</div>

              <div class="day text-secondary">
              ${dayIndex} ${name}
              </div>
            </div>
            <div class="card-body">
              <div class="cuntry text-center text-secondary">${weatherData.location.name}</div>
              <div class="temperatur  fw-bold text-white mb-4">
                ${weatherData.forecast.forecastday[i].day.avgtemp_c}°
              </div>
              <div class="temperatur2 text-center fs-6 fw-bold text-secondary mb-4">
                ${weatherData.forecast.forecastday[i].day.mintemp_c}°
              </div>
              <div class="icon mb-2">
                <img src="https:${weatherData.forecast.forecastday[i].day.condition.icon}" alt=${weatherData.forecast.forecastday[i].day.condition.text}">
              </div>
              <p class="text-warning text-center">${weatherData.forecast.forecastday[i].day.condition.text}</p>
            </div>
        
                    </div>

                    </div>

        </div>
      `
  }

  document.getElementById("rowData").innerHTML = cartona;
}











