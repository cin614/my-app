<script>
  let { movie } = $props();
</script>

<div class="card h-100 shadow-sm">
  <img src={movie.poster} class="card-img-top" alt={movie.title} />

  <div class="card-body">
    <h5 class="card-title">{movie.title}</h5>
    <p class="card-text mb-1"><strong>Jahr:</strong> {movie.year}</p>
    <p class="card-text mb-1"><strong>Dauer:</strong> {movie.length}</p>
    <p class="card-text">
      <strong>Actors:</strong> {movie.actors.join(', ')}
    </p>
  </div>
</div>
