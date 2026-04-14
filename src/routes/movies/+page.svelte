<script>
  import MovieCard from '$lib/components/MovieCard.svelte';
  let { data } = $props();
</script>

<h1 class="mb-4">Movies</h1>

<p>Meiner Liste</p>
<p>Disclaimer: Daten und Bilder mit ChatGPT und DALL-E generiert</p>

<a href="/movies/create" class="btn btn-primary mb-4">Add New Movie</a>

<div class="row">
  {#each data.movies as movie}
    <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
      <a href={`/movies/${movie._id}`} class="text-decoration-none text-dark">
        <MovieCard {movie} />
      </a>
    </div>
  {/each}
</div>