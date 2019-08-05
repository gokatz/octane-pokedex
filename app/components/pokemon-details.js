import Component from '@glimmer/component';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class PokemonDetailsComponent extends Component {
  @tracked weekAgainst = [];
  @tracked strongAgainst = [];
  @alias('args.pokemon.types') pokeTypes;

  constructor() {
    super(...arguments);
    this.pokeTypes.forEach((typeObj) => {
      this.fetchWeekness(typeObj.type);
    });
  }

  get height() {
    return (this.args.pokemon.height * 0.1).toFixed(2);
  }

  get weight() {
    return (this.args.pokemon.weight * 0.1).toFixed(2);
  }

  async fetchWeekness(typeObj) {
    let { url } = typeObj;

    let response = await window.fetch(url);
    let typeDetails = await response.json();
    let { damage_relations: { double_damage_from, double_damage_to } } = typeDetails || {};

    double_damage_from.forEach((pokemon) => {
      this.weekAgainst.pushObject(pokemon);
    });
    double_damage_to.forEach((pokemon) => {
      this.strongAgainst.pushObject(pokemon);
    });
  }
}
