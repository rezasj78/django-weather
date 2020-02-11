const key = 'wRYfuE9ueh2LGYTj6sEtHuKTm0u3NXfU';

const getWeather = async id => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const q = `${id}?apikey=${key}`;
    const respons = await fetch(baseURL + q);
    if (respons.status !== 200)
        throw new Error('after response')
    const data = await respons.json();
    return data[0];
};

const getCity = async city => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const q = `?apikey=${key}&q=${city}`;
    const respons = await fetch(baseURL + q);
    if (respons.status !== 200)
        throw new Error('after response')
    const data = await respons.json();
    return data[0];
}


