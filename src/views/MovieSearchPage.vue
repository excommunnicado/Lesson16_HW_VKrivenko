<template>
  <div class="movie-search">
    <search-form @search="performSearch" />
    <movie-list :movies="searchResults" />
    <div v-if="searchResults.length === 0">Фильмов не найдено</div>
  </div>
</template>

<script>
import SearchForm from "../components/SearchForm.vue";
import MovieList from "../components/MovieList.vue";
import axios from "axios";

export default {
  name: "MovieSearchPage",
  components: {
    SearchForm,
    MovieList,
  },
  data() {
    return {
      searchResults: [],
    };
  },
  methods: {
    performSearch(query) {
      axios
        .get(`https://imdb-api.com/en/API/SearchMovie/k_djzxerd0/${query}`)
        .then((response) => {
          this.searchResults = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.movie-search {
  padding: 20px;
}
</style>
