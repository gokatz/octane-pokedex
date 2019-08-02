import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PokemonDetailsComponent extends Component {
  @tracked weekAgainst = [];
  @tracked strongAgainst = [];
  @tracked selectedType = '';

  get height() {
    return (this.args.pokemon.height * 0.1).toFixed(2);
  }

  get weight() {
    return (this.args.pokemon.weight * 0.1).toFixed(2);
  }

  @action
  async fetchWeekness(typeObj) {
    let { url, name } = typeObj;
    this.selectedType = name;

    let response = await window.fetch(url);
    let typeDetails = await response.json();
    let { damage_relations: { double_damage_from, double_damage_to } } = typeDetails || {};
    this.weekAgainst = double_damage_from;
    this.strongAgainst = double_damage_to;
  }
}
