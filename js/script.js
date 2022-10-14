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

button.addEventListener('click', function(){

    const randomIndex = Math.floor(Math.random() * classe75.length  );
    //const max = classe75.length - 1;
    //const min = 0;
    //const randomIndex = Math.floor(Math.random() * (max - min +1 ) + min );

    console.log(randomIndex);
    document.querySelector('#output').innerHTML = classe75[randomIndex];

}); 