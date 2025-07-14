async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    document.getElementById("weatherBox").textContent = "Please enter a city name.";
    return;
  }

const apiKey = "cd47a859eea74758b1684113251107";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const location = data.location.name + ", " + data.location.country;
    const temp = data.current.temp_c + "°C";
    const condition = data.current.condition.text;

    document.getElementById("weatherBox").innerHTML =
      `<h3>${location}</h3>
       <p><strong>Temperature:</strong> ${temp}</p>
       <p><strong>Condition:</strong> ${condition}</p>`;
  } catch (error) {
    document.getElementById("weatherBox").textContent = "Could not fetch weather. Try again.";
    console.log("Error:", error);
  }
}
