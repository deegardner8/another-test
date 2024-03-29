const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=c40d4d140624f48174136067e6a2694d"
;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forecast);
    let day = 0;
    const weekdays = ['Sunday:', 'Monday:', 'Tuesday:', 'Wednesday:', 'Thursday:', 'Friday:', 'Saturday:'];
    forecast.forEach(x => {
        const d= new Date(x.dt_txt);
        document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
        day++;
    })
});