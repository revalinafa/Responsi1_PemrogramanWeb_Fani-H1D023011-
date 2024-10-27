function randomSport() {
  const sports = ["football.html", "basketball.html", "tennis.html"];
  const randomIndex = Math.floor(Math.random() * sports.length);
  window.location.href = sports[randomIndex];
}
