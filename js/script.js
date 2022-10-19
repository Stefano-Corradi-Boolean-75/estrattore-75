const classe75 = [
  'Cristian	Antir',
  'Eugenio	Belardinelli',
  'Matteo	Bellomo',
  'Marcello	Bozzuto',
  // 'Sara Cassandra	Cappelli',
  // 'Lorenzo	Carelli',
  // 'Saverio	Cascelli',
  // 'Riccardo	Civardi',
  // 'Debora	Cocchi',
  // 'Paolo	Colombo',
  // 'Denis	Costantin',
  // 'Stefania	De Flaviis',
  // 'Riccardo	De Stefano',
  // 'Luca 	Fabbozzo',
  // 'Mirko 	Farina',
  // 'Cristina Lietti',
  // 'Riccardo	Lo Presti',
  // 'Ciro	Meluziis',
  // 'Manuel	Mena',
  // 'Enrico	Michelotto',
  // 'Carmelo 	Miuccio',
  // 'Ibrahim	Mujagic',
  // 'Carmelo 	Palumbo',
  // 'Pasqualino	Pannella',
  // 'Nicholas	Paparusso',
  // 'Giorgio	Perez',
  // 'Andrea	Pinna',
  // 'Karim	Pucci',
  // 'Gabriele	Rinciari',
  // 'Federico	Sainas',
  // 'Mattia	Stangherlin',
  // 'Jessica	Tartaglia',
  // 'Filippo	Toffoletto',
  // 'Michele	Zancolò',
  //'Andrea	Zollini'
];

// 1 al click del bottone estrarre un indice random da 0 a lunghezza array - 1
// 2 prendo l'elemento del'array con qull'indice estratto
// 3 stampo il nome estratto in pagina

const button = document.querySelector('#bottone');
let studentiEstratti = [];
const output = document.querySelector('#output');
let isFinito = false;

button.addEventListener('click',doExtration); 

function doExtration(){

  if(isFinito){
    resetAll();
  }

  let isNomeEstratto = false;

  if(studentiEstratti.length < classe75.length){

    while(!isNomeEstratto){
      const randomIndex = getRandomNumber(0, classe75.length - 1);
      const nomeEstratto =  classe75[randomIndex];
      console.log(nomeEstratto,studentiEstratti);
      if(!studentiEstratti.includes(nomeEstratto)){
        studentiEstratti.push(nomeEstratto);
        isNomeEstratto = true;
      }
      output.innerHTML = nomeEstratto;
    }

  }else{
    // FINE
    isFinito = true;
    output.innerHTML = 'TUTTI GLI STUDENTI SONO STATI ESTRATTI';
    button.innerHTML = "Ricomincia";
    console.log('fine');
  }
}

function resetAll(){
  studentiEstratti = [];
  isFinito = false;
  button.innerHTML = "Estrai";
}

function getRandomNumber(min, max){
  const randomNumer = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumer;
}
