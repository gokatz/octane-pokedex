import Route from "@ember/routing/route";

export default class PokemonDetailRoute extends Route {
  async model({ pokemon_name }) {
    let pokemons = this.modelFor("pokemons");
    let details = pokemons.findBy("name", pokemon_name);
    let response = await window.fetch(details.url);
    let json = await response.json();
    json.imageUrl = details.imageUrl;
    return json;
  }
}
