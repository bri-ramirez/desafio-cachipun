let cantidadJuegos = prompt('¿cuántas veces deseas jugar?');
cantidadJuegos = parseInt(cantidadJuegos);

const PIEDRA = 1;
const PAPEL = 2;
const TIJERA = 3;

let ganaste = 0;

for(let i=0; i < cantidadJuegos; i++ ){
  console.log("juego número: " + i);

  let opcionUsuario = prompt('elige 1:piedra, 2:papel o 3:tijeras');
  opcionUsuario = parseInt(opcionUsuario);

  let opcionMaquina = Math.floor(Math.random()*3) + 1;

  // resultado será: gana, pierde o empate
  const resultado = piedraPapelTijeras(opcionUsuario, opcionMaquina);

  switch(resultado){
    case 'gana':
      ganaste++;
      alert('¡Felicidades, haz ganado!')
      break;
    case 'pierde':
      alert('Lo siento, has perdido!')
      break;
    case 'empate':
      alert('¡haz empatado con la maquina¡');
      break;
  }
}

let ganasteMsg = 'veces';
if(ganaste == 1){
  ganasteMsg = 'vez';
}

alert(`El juego ha terminado, has ganado ${ganaste} ${ganasteMsg}!!`);

function piedraPapelTijeras(opcion1, opcion2){
  if(opcion1 ==  opcion2 ){
    return 'empate';
  }

  if(opcion1 == PIEDRA && opcion2 == PAPEL){
    return 'pierde';
  }

  if(opcion1 == PIEDRA && opcion2 == TIJERA){
    return 'gana';
  }

  if(opcion1 == PAPEL && opcion2 == PIEDRA){
    return 'gana';
  }

  if(opcion1 == PAPEL && opcion2 == TIJERA){
    return 'pierde';
  }

  if(opcion1 == TIJERA && opcion2 == PAPEL){
    return 'gana';
  }

  if(opcion1 == TIJERA && opcion2 == PIEDRA){
    return 'pierde';
  }
}