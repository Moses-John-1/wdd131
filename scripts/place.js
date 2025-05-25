// Function to calculate wind chill in °C based on temperature (°C) and wind speed (km/h)
function calculateWindChill(temperature, windSpeed) {


    if (typeof temperature !== 'number' || typeof windSpeed !== 'number' || isNaN(temperature) || isNaN(windSpeed)) {
        return 'N/A';
    }

    // Wind chill formula applies only if temp <= 10°C and wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return `${windChill.toFixed(1)}°C`;
    }
    return 'N/A';
}

document.addEventListener('DOMContentLoaded', () => {
    const temperature = 28; // °C
    const windSpeed = 6;    // km/h

    // Update wind chill
    const windChillElement = document.getElementById('windchill');
    if (windChillElement) {
        windChillElement.textContent = calculateWindChill(temperature, windSpeed);
    } else {
        console.error('Element with ID "windchill" not found.');
    }

    // Update current year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    } else {
        console.error('Element with ID "current-year" not found.');
    }

    // Update last modified date in WAT (Africa/Lagos)
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        const lastModified = new Date();
        const options = {
            timeZone: 'Africa/Lagos',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        };
        lastModifiedElement.textContent = `${lastModified.toLocaleString('en-US', options)} WAT`;
    } else {
        console.error('Element with ID "last-modified" not found.');
    }
});