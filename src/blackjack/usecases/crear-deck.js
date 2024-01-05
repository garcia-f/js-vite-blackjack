

import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas   Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>}               Retorna un nuevo deck de cartas
 */
export const crearDeck = ( tiposDeCartas, tiposEspeciales ) => {

  if ( !tiposDeCartas || tiposDeCartas === 0 ) throw new Error('tiposDeCartas es obligatorio, como un arreglo de string');
  if ( !tiposEspeciales || tiposEspeciales === 0 ) throw new Error('tiposEspeciales es obligatorio, como un arreglo de string');

  let deck = [];

  for( let i = 2; i <= 10; i++ ) {
    for( let tipo of tiposDeCartas ) {
      deck.push( i + tipo);
    }
  }

  for( let tipo of tiposDeCartas ) {
    for( let esp of tiposEspeciales ) {
      deck.push( esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle( deck );

  return deck;
}