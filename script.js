document.getElementById("bobux-btn").addEventListener("click", function() {
  const video = document.getElementById("video");
  video.style.display = "block";
  video.scrollIntoView({ behavior: "smooth" }); // Scroll to the video
});