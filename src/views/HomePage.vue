<template>
  <div class="home">
    <h2>Топ 250 фильмов</h2>
    <div class="filters">
      <button @click="filterHighRated">Оценка выше 9 баллов</button>
      <button @click="filterRecent">Релиз 2000</button>
    </div>
    <movie-list :movies="filteredMovies" />
  </div>
</template>

<script>
import MovieList from "../components/MovieList.vue";
import axios from "axios";

export default {
  name: "HomePage",
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [],
    };
  },
  created() {
    this.fetchMovies();
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(
        (movie) => movie.imDbRating >= 9 && movie.year >= 2000
      );
    },
  },
  methods: {
    fetchMovies() {
      axios
        //   мой ключ k_djzxerd0
        .get("https://imdb-api.com/en/API/Top250Movies/k_djzxerd0")
        .then((response) => {
          this.movies = response.data.items;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    filterHighRated() {
      this.movies = this.movies.filter((movie) => movie.imDbRating >= 9);
    },
    filterRecent() {
      this.movies = this.movies.filter((movie) => movie.year >= 2000);
    },
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.filters {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.filters button {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}

.filters button:last-child {
  margin-right: 0;
}

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
  object-fit: cover;
}

.movie-card .details {
  flex: 1;
}

.movie-card .details h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
}

.movie-card .details p {
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
}

.movie-card .details .rating {
  font-weight: bold;
  margin-top: 10px;
}

.no-movies {
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  color: #666;
}
</style>
