

/**
 * 
 * @param {String} carta
 * @param {HTMLElement} lugar  Lugar donde va a ir la carta     
 * @returns {HTMLImageElement} Retorna una imagen
 */
export const crearCartaHTML = ( carta, lugar ) => {

  if ( !carta ) throw new Error('La carta es un argumento necesario')
  
  const imgCarta = document.createElement('img');
  imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
  imgCarta.classList.add('carta');
  lugar.append( imgCarta );
 
  return imgCarta;

}

