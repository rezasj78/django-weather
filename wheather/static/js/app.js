const cityForm = document.querySelector('.change-location')
const card = document.querySelector('.card')
const detail = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
console.log(path)
const updateUI = data => {
    detail.innerHTML = `<h5 class="my-3 CN">${data.cityId.EnglishName}</h5>
            <div class="my-3">${data.weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span class="tem">${data.weather.Temperature.Metric.Value}</span>
                <span>℃</span>
            </div>`
    card.classList.remove('d-none');

    let timeSrc = null;
    if (data.weather.IsDayTime)
        timeSrc = 'wheather/static/img/day.svg'
    else
        timeSrc = 'wheather/static/img/night.svg'
    time.setAttribute('src', timeSrc)

    icon.setAttribute('src', `wheather/static/img/icons/${data.weather.WeatherIcon}.svg`)
};

const updateCity = async cityName => {
    const cityId = await getCity(cityName);
    const weather = await getWeather(cityId.Key);
    return {cityId, weather}
}

cityForm.addEventListener('submit', evt => {
    evt.preventDefault();

    //get city
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with city info
    updateCity(city)
        .then(result => updateUI(result))
        .catch(err => console.log(err))
})