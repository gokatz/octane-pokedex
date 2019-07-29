import Route from "@ember/routing/route";

export default class PokemonRoute extends Route {
  model() {
    return window.fetch("https://api.myjson.com/bins/119j0d").then(response => {
      return response.json().then(json => {
        return json.results;
      });
    });
  }
}
