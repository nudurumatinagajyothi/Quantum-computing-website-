// navbar.js
document.addEventListener('DOMContentLoaded', () => {
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg navbar-custom sticky-top bg-light shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="index.html">Quantum Portal</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="tidbits.html">Tidbits</a></li>
          <li class="nav-item"><a class="nav-link" href="realworld.html">Real World Examples</a></li>
          <li class="nav-item"><a class="nav-link" href="ppt.html">PPT</a></li>
          <li class="nav-item"><a class="nav-link" href="picsvideos.html">Pics & Videos</a></li>
          <li class="nav-item"><a class="nav-link" href="books.html">Books</a></li>
          <li class="nav-item"><a class="nav-link" href="articles.html">Useful Articles</a></li>
          <li class="nav-item"><a class="nav-link" href="subscription.html">Subscription Plans</a></li>
          <li class="nav-item"><a class="nav-link" href="dday.html">D-Day</a></li>
          <li class="nav-item"><a class="nav-link" href="terminology.html">Terminology</a></li>
          <li class="nav-item"><a class="nav-link" href="companies.html">QC Companies</a></li>
          <li class="nav-item"><a class="nav-link" href="news.html">News</a></li>
          <li class="nav-item"><a class="nav-link" href="labs.html">Labs</a></li>
        </ul>
      </div>
    </div>
  </nav>
  `;

  // Insert navbar at the very top
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Highlight active link
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (
      link.getAttribute('href') === currentPage ||
      (currentPage === '' && link.getAttribute('href') === 'index.html')
    ) {
      link.classList.add('active');
    }
  });

  // ✅ Auto-close navbar on mobile after clicking a link
  const navbarCollapse = document.getElementById('navbarNav');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).toggle();
      }
    });
  });
});
