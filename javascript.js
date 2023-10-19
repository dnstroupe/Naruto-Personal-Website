// Get the date when Naruto becomes Hokage (in milliseconds since January 1, 1970)
const narutoBecomesHokageDate = new Date("2024-12-01").getTime();

// Function to update the countdown timer
function updateCountdown() {
  const currentDate = new Date().getTime();
  const timeRemaining = narutoBecomesHokageDate - currentDate;

  if (timeRemaining <= 0) {
    // Naruto has become Hokage!
    document.getElementById("countdown").innerHTML =
      "Naruto is now the Hokage!";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
            ${days}d ${hours}h ${minutes}m ${seconds}s until Naruto becomes Hokage!
        `;
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update
updateCountdown();

// "Hello World" routine
document.getElementById("output").innerHTML = "Hello, world!";
