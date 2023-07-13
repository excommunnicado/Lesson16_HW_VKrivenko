import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import MovieSearch from "../views/MovieSearchPage.vue";
import MovieDetails from "../views/MovieDetailsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movies",
    name: "MovieSearch",
    component: MovieSearch,
  },
  {
    path: "/movies/:id",
    name: "MovieDetails",
    component: MovieDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
