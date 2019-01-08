import React, { Component } from 'react';
import './Pokecard.css';

const POKE_API =
  'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

// return the format of a Pokecard
class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id}.png`;

    return (
      <div className="Pokecard">
        <h2 className="Poke-name">{this.props.name}</h2>
        <img className="Poke-image" src={imgSrc} alt="" />
        <p className="Poke-type">{this.props.type}</p>
        <p className="Poke-exp">Experience: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
