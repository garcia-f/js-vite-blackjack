import { crearCartaHTML } from "./crear-carta-html.js";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * Turno de la Computadora
 * @param {Number} puntosMinimos   Puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas
 * @param {Array<String>} deck     Arreglo que contiene las cartas 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

  if ( !puntosMinimos ) throw new Error('Puntos minimos es necesario');
  if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario')

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta( deck );

    puntosComputadora = puntosComputadora + valorCarta( carta );
    puntosHTML.innerText = puntosComputadora;
    
    // TODO: crear carta
    crearCartaHTML( carta, divCartasComputadora );

    if( puntosMinimos > 21 ) {
      break;
    }

  } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

  setTimeout(() => {
    if( puntosComputadora === puntosMinimos ) {
      alert('Nadie gana :(');
    } else if ( puntosMinimos > 21 ) {
      alert('Computadora gana')
    } else if( puntosComputadora > 21 ) {
      alert('Jugador Gana');
    } else {
      alert('Computadora Gana')
    }
  }, 300 );
}