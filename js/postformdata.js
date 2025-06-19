document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault(); //prevent form from refreshing the page

    const formData = new FormData(this); // Grab form data
    const data = Object.fromEntries(formData.entries()); // Convert to JSON object

    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send form data as JSON
      });

      const result = await response.json();

      document.getElementById("responseMsg").innerText = result.message;

      if (response.ok) {
        this.reset(); // Clear the form
      }
    } catch (err) {
      console.error("Submission error:", err);
      document.getElementById("responseMsg").innerText = "We are sorry, your message wasn't sent. thank you ❤️, try again!";
    }
});