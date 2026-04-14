<script>
  let { data } = $props();
</script>

<a href="/movies">Back</a>

<h1>{data.movie.title}</h1>

<div class="row mt-4">
  <div class="col-md-4">
    <img
      src={data.movie.poster}
      alt={data.movie.title}
      class="img-fluid"
    />
  </div>

  <div class="col-md-8">
    <p><strong>Jahr:</strong> {data.movie.year}</p>
    <p><strong>Dauer:</strong> {data.movie.length}</p>

    <p><strong>Cast:</strong></p>
    <ul>
      {#each data.movie.actors as actor}
        <li>{actor}</li>
      {/each}
    </ul>
  </div>
</div>