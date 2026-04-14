import db from '$lib/server/db.js';

export const actions = {
  create: async ({ request }) => {
    const data = await request.formData();

    let movie = {
      title: data.get('title'),
      year: Number(data.get('year')),
      length: data.get('length'),
      actors: [],
      poster: '/images/placeholder.png',
      watchlist: false
    };

    await db.createMovie(movie);

    return { success: true };
  }
};