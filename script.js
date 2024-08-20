function findNearest(serviceType) {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    fetch(`http://localhost:3000/api/find-nearest?service=${serviceType}&lat=${lat}&lng=${lng}`)
      .then((response) => response.json())
      .then((data) => {
        const resultDiv = document.getElementById('result');
        if (data.error) {
          resultDiv.textContent = data.error;
        } else {
          resultDiv.textContent = `Nearest ${serviceType}: ${data.name} (Contact: ${data.contact}, Distance: ${data.distance} km)`;
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });
}
