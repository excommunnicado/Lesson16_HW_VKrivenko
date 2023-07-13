<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
.app {
  font-family: "Arial", sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
}
</style>
