<template>
  <header class="app-header">
    <h1 class="app-title">Фильмы</h1>
    <nav class="app-nav">
      <router-link to="/">Главная</router-link>
      <router-link to="/movies">Поиск фильмов</router-link>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #000;
  color: #fff;
}

.app-title {
  font-size: 24px;
}

.app-nav a {
  color: #fff;
  margin-left: 10px;
  text-decoration: none;
}

.app-nav a:hover {
  text-decoration: underline;
}
</style>
