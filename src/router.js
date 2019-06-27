import Vue from "vue";
import Router from "vue-router";
import BeerView from "@/views/BeerView";
import FavouritesView from "@/views/FavouritesView";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/beers",
      name: "beer-view",
      component: BeerView
    },
    {
      path: "/favourites",
      name: "favourites-view",
      component: FavouritesView
    }
  ]
})

export default router;
