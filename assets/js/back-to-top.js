
document.addEventListener("DOMContentLoaded", function() {
  const toTopButton = document.getElementById("to-top");

  window.addEventListener("scroll", function() {
    // Show the button after scrolling down 300px
    if (window.scrollY > 300) {
      toTopButton.style.display = "block";
    } else {
      toTopButton.style.display = "none";
    }
  });

  // Smooth scroll to top when button is clicked
  toTopButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
