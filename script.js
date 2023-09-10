document.getElementById("convertBtn").addEventListener("click", function() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputTempElement = document.getElementById("outputTemp");
  
    if (inputUnit === "celsius") {
      const convertedTemp = (inputTemp * 9/5) + 32;
      outputTempElement.textContent = `${convertedTemp.toFixed(2)} °F`;
    } else {
      const convertedTemp = (inputTemp - 32) * 5/9;
      outputTempElement.textContent = `${convertedTemp.toFixed(2)} °C`;
    }
  });
  