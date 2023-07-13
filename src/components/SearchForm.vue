<template>
  <form @submit.prevent="searchMovies" class="search-form">
    <input v-model="query" type="text" placeholder="Искать фильмы..." />
    <button type="submit">Поиск</button>
  </form>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    searchMovies() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style scoped>
.search-form {
  display: flex;
  margin-bottom: 20px;
}

.search-form input {
  flex: 1;
  padding: 8px;
  font-size: 16px;
}

.search-form button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.search-form button:hover {
  background-color: #0056b3;
}
</style>
