document
  .getElementById("providerForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const serviceType = document.getElementById("serviceType").value;
    const contact = document.getElementById("contact").value;
    const lat = document.getElementById("lat").value;
    const lng = document.getElementById("lng").value;

    try {
      const response = await fetch("http://localhost:3000/api/add-provider", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, serviceType, contact, lat, lng }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.success) {
        alert("Service provider added successfully");
      } else {
        alert("Failed to add service provider");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding service provider");
    }
  });
