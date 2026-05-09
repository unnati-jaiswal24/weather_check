async function getweather() {
    const city = document.getElementById("city").value;
    if (city === ""){
        document.getElementById("results").innerHTML = "Please enter a city name";
        return;
    }
    const url = `/api/weather?city=${encodeURIComponent(city)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            document.getElementById("results").innerHTML = data.message || "City not found";
            return;
        }

        const temp = data.main.temp;
        const weather = data.weather[0].description;
        const name = data.name;

        document.getElementById("results").innerHTML = `
            <h2>${name}</h2>
            <h3><b>Temperature: ${temp}°C</b></h3>
            <h3><b>Weather: ${weather}</b></h3>
        `;
    } catch (error) {
        document.getElementById("results").innerHTML = "Error fetching data";
        console.log(error);
    }
}