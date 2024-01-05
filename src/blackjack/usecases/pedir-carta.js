
/**
 * Esta funcion permite pedir una carta
 * @param {Arrray<String>} deck Es un arreglo de cartas (string)
 * @returns {String}            Retorna la ultima carta del deck
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}