document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    var temperatureInput = document.getElementById('temperature');
    var unitSelect = document.getElementById('unit');
    var convertedTemperatureOutput = document.getElementById('convertedTemperature');
    
    var temperature = parseFloat(temperatureInput.value);
    var unit = unitSelect.value;
    var convertedTemperature;
    
    if (unit === 'celsius') {
      convertedTemperature = (temperature * 9 / 5) + 32;
      convertedTemperatureOutput.value = convertedTemperature.toFixed(2) + ' °F';
    } else if (unit === 'fahrenheit') {
      convertedTemperature = (temperature - 32) * 5 / 9;
      convertedTemperatureOutput.value = convertedTemperature.toFixed(2) + ' °C';
    }

    convertedTemperatureOutput.value = convertedTemperature.toFixed(2) + ' °' + (unit === 'celsius' ? 'C' : 'F');

  });
