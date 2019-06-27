import Vue from "vue";
import Router from "vue-router";
import BeerView from "@/views/BeerView";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/beers",
      name: "beer-view",
      component: BeerView
    }
  ]
})

export default router;
