<template>
  <div class="movie-details" v-if="movie">
    <div class="header">
      <h2>{{ movie.title }}</h2>
      <p>Год: {{ movie.year }}</p>
      <p v-if="movie.imDbRating">Рейтинг: {{ movie.imDbRating }}</p>
    </div>
    <div class="poster">
      <img :src="movie.image" :alt="movie.title" />
    </div>
    <div class="genres">
      <h3>Жанры:</h3>
      <ul>
        <li v-for="genre in movie.genres" :key="genre">{{ genre }}</li>
      </ul>
    </div>
    <div class="cast">
      <h3>Каст:</h3>
      <ul>
        <li v-for="actor in movie.actors.slice(0, 3)" :key="actor.id">
          <img :src="actor.image" :alt="actor.name" />
          <div class="actor-details">
            <p>
              <strong>{{ actor.name }}</strong>
            </p>
            <p>as {{ actor.asCharacter }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="similar-movies">
      <h3>Похожие фильмы:</h3>
      <ul>
        <li v-for="similarMovie in movie.similarMovies" :key="similarMovie.id">
          <img :src="similarMovie.image" :alt="similarMovie.title" />
          <div class="movie-details">
            <p>
              <strong>{{ similarMovie.title }}</strong>
            </p>
            <p>{{ similarMovie.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieDetailsPage",
  data() {
    return {
      movie: null,
    };
  },
  created() {
    this.fetchMovieDetails();
  },
  methods: {
    fetchMovieDetails() {
      const movieId = this.$route.params.id;
      axios
        //   мой ключ k_djzxerd0
        .get(`https://imdb-api.com/en/API/Title/k_djzxerd0/${movieId}`)
        .then((response) => {
          this.movie = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.movie-details {
  padding: 20px;
}

.header {
  margin-bottom: 20px;
}

.header h2 {
  margin-top: 0;
  margin-bottom: 10px;
}

.poster img {
  width: 300px;
  height: auto;
  margin-bottom: 20px;
}

.genres {
  margin-bottom: 20px;
}

.genres h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.genres ul {
  margin: 0;
  padding-left: 20px;
}

.cast {
  margin-bottom: 20px;
}

.cast h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.cast ul {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
}

.cast li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 50%;
}

.cast li img {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.cast li .actor-details p {
  margin: 0;
}

.similar-movies {
  margin-bottom: 20px;
}

.similar-movies h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.similar-movies ul {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
}

.similar-movies li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 50%;
}

.similar-movies li img {
  width: 50px;
  height: auto;
  margin-right: 10px;
}

.similar-movies li .movie-details p {
  margin: 0;
}
</style>
