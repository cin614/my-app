<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app.css';
	let { children } = $props();
</script>

<nav class="navbar navbar-dark bg-dark">
  <div class="container d-flex justify-content-start">
    <a class="navbar-brand me-3" href="/">ScreenStack</a>
    <a class="nav-link text-light" href="/movies">Movies</a>
  </div>
</nav>

<main class="container mt-4">
  {@render children()}
</main>

