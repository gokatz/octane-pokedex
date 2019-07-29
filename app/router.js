import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("pokemons", { path: "/" }, function() {
    this.route("detail", { path: "/:pokemon_name" });
  });
});

export default Router;
