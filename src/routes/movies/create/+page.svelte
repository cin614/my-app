<script>
  let { form } = $props();
</script>

<a href="/movies">Back</a>

<h1 class="mb-4">Add a Movie</h1>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="title" class="form-label">Name</label>
    <input
      id="title"
      name="title"
      class="form-control"
      type="text"
      required
    />
  </div>

  <div class="mb-3">
    <label for="year" class="form-label">Year</label>
    <input
      id="year"
      name="year"
      class="form-control"
      type="number"
      required
    />
  </div>

  <div class="mb-3">
    <label for="length" class="form-label">Length</label>
    <input
      id="length"
      name="length"
      class="form-control"
      type="text"
      placeholder="114 Minuten"
      required
    />
  </div>

  <button type="submit" class="btn btn-primary">Add Movie</button>
</form>

{#if form?.success}
  <p class="mt-3">Movie created successfully.</p>
{/if}