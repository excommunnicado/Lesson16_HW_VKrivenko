<template>
  <div>
    <div v-if="movies.length === 0">Фильмов не найдено</div>
    <div class="movie-card" v-for="movie in movies" :key="movie.id">
      <img :src="movie.image" :alt="movie.title" />
      <div class="details">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.description }}</p>
        <p v-if="movie.imDbRating">Рейтинг: {{ movie.imDbRating }}</p>
        <router-link :to="'/movies/' + movie.id">Показать детали</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.movie-card {
  display: flex;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.movie-card img {
  width: 150px;
  height: auto;
  margin-right: 10px;
}

.movie-card .details {
  flex: 1;
}

.movie-card .details h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.movie-card .details p {
  margin: 0;
}

.movie-card .details .rating {
  font-weight: bold;
  margin-top: 10px;
}
</style>
