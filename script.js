// Highlight active menu item based on URL
document.addEventListener("DOMContentLoaded", function() {
  let current = location.pathname.split("/").slice(-1)[0];
  document.querySelectorAll(".nav-link").forEach(link => {
    if(link.getAttribute("href") === current){
      link.classList.add("active");
    }
  });
});

