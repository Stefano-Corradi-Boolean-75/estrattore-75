const classe75 = [
  'Cristian	Antir',
  'Eugenio	Belardinelli',
  'Matteo	Bellomo',
  'Marcello	Bozzuto',
  'Sara Cassandra	Cappelli',
  'Lorenzo	Carelli',
  'Saverio	Cascelli',
  'Riccardo	Civardi',
  'Debora	Cocchi',
  'Paolo	Colombo',
  'Denis	Costantin',
  'Stefania	De Flaviis',
  'Riccardo	De Stefano',
  'Luca 	Fabbozzo',
  'Mirko 	Farina',
  'Cristina Lietti',
  'Riccardo	Lo Presti',
  'Ciro	Meluziis',
  'Manuel	Mena',
  'Enrico	Michelotto',
  'Carmelo 	Miuccio',
  'Ibrahim	Mujagic',
  'Carmelo 	Palumbo',
  'Pasqualino	Pannella',
  'Nicholas	Paparusso',
  'Giorgio	Perez',
  'Andrea	Pinna',
  'Karim	Pucci',
  'Gabriele	Rinciari',
  'Federico	Sainas',
  'Mattia	Stangherlin',
  'Jessica	Tartaglia',
  'Filippo	Toffoletto',
  'Michele	Zancolò',
  'Andrea	Zollini'
];

// 1 al click del bottone estrarre un indice random da 0 a lunghezza array - 1
// 2 prendo l'elemento del'array con qull'indice estratto
// 3 stampo il nome estratto in pagina

const button = document.querySelector('#bottone');
const studentiEstratti = [];
const output = document.querySelector('#output');

button.addEventListener('click', function(){

  // 1 estrarre un numero compreso fra 0 e l'ultimo elemento dell'array
  // 2 se il mome estratto (corrispondente all'indice del numero estratto) è già presente nell'array di studenti estratti devo estrarre un altro numero funo a quando ne trovo uno non estratto
  // 3 quando trovo un nuovo nome lo aggiungo all'elenco di studenti estratti
  // 4 se l'elenco di studenti estratti è lungo uguale all'elenco della classe finisce
  let isNomeEstratto = false;

  if(studentiEstratti.length < classe75.length){

    while(!isNomeEstratto){
      const randomIndex = Math.floor(Math.random() * classe75.length );
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
    output.innerHTML = 'TUTTI GLI STUDENTI SONO STATI ESTRATTI';
    console.log('fine');
  }


}); 