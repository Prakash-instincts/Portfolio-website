function showContent(contentId) {
  var aboutMeContent = document.getElementById("aboutMe");
  var aboutMeBtn = document.getElementById("aboutMeBtn");
  var coreCompContent = document.getElementById("coreCompetencies");
  var coreCompBtn = document.getElementById("coreCompetenciesBtn");
  var leaderContent = document.getElementById("Leadership");
  var leaderBtn = document.getElementById("LeadershipBtn");

  // Reset all content and buttons
  aboutMeContent.classList.remove("active");
  aboutMeBtn.classList.remove("active");
  coreCompContent.classList.remove("active");
  coreCompBtn.classList.remove("active");
  leaderContent.classList.remove("active");
  leaderBtn.classList.remove("active");

  // Activate the selected content and button
  if (contentId === 'aboutMe') {
      aboutMeContent.classList.add("active");
      aboutMeBtn.classList.add("active");
  } else if (contentId === 'coreCompetencies') {
      coreCompContent.classList.add("active");
      coreCompBtn.classList.add("active");
  } else if (contentId === 'Leadership') {
      leaderContent.classList.add("active");
      leaderBtn.classList.add("active");
  }
}
