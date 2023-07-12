function control_bagelio() {
  let num_guesses = 0
  let guessed = false
}

let num_guesses = 0
// let guessed = false
// console.log(num_guesses)


var select = document.getElementById("selectPlayer");
var atp_list = ['Carlos Alcaraz',
  'Novak Djokovic',
  'Daniil Medvedev',
  'Casper Ruud',
  'Stefanos Tsitsipas',
  'Holger Rune',
  'Andrey Rublev',
  'Jannik Sinner',
  'Taylor Fritz',
  'Frances Tiafoe',
  'Karen Khachanov',
  'Aliassime Auger',
  'Cameron Norrie',
  'Borna Coric',
  'Tommy Paul',
  'Lorenzo Musetti',
  'Minaur De',
  'Hubert Hurkacz',
  'Francisco Cerundolo',
  'Pablo Carreno-Busta',
  'Alexander Zverev',
  'Jan-Lennard Struff',
  'Roberto Bautista-Agut',
  'Grigor Dimitrov',
  'Sebastian Korda',
  'Alexander Bublik',
  'Yoshihito Nishioka',
  'Nicolas Jarry',
  'Denis Shapovalov',
  'Daniel Evans',
  'Tallon Griekspoor',
  'Tomas Etcheverry',
  'Nick Kyrgios',
  'Fokina Davidovich',
  'Adrian Mannarino',
  'Ben Shelton',
  'Jiri Lehecka',
  'Matteo Berrettini',
  'Ugo Humbert',
  'Andy Murray',
  'Miomir Kecmanovic',
  'Lorenzo Sonego',
  'Christopher Eubanks',
  'De Van',
  'Yannick Hanfmann',
  'Sebastian Baez',
  'Emil Ruusuvuori',
  'Jeffrey Wolf',
  'Gregoire Barrere',
  'Aslan Karatsev',
  'Anja Stankovic',
  'Yulia Starodubtseva',
  'Wild Seyboth',
  'Goncalo Oliveira',
  'Darja Semenistaja',
  'Antoine Hoang',
  'Dominic Thiem',
  'Francesco Passaro',
  'Nagi Hanatani',
  'Reka-Luca Jani'];

wta_list = ['Iga Swiatek',
  'Aryna Sabalenka',
  'Elena Rybakina',
  'Jessica Pegula',
  'Caroline Garcia',
  'Ons Jabeur',
  'Cori Gauff',
  'Maria Sakkari',
  'Petra Kvitova',
  'Darya Kasatkina',
  'Barbora Krejcikova',
  'Veronika Kudermetova',
  'Maia Haddad',
  'Belinda Bencic',
  'Ludmilla Samsonova',
  'Karolina Muchova',
  'Jelena Ostapenko',
  'Madison Keys',
  'Karolina Pliskova',
  'Viktoria Azarenka',
  'Donna Vekic',
  'Ekaterina Alexandrova',
  'Anastasia Potapova',
  'Magda Linette',
  'Qinwen Zheng',
  'Anhelina Kalinina',
  'Bernarda Pera',
  'Elise Mertens',
  'Petra Martic',
  'Irina Begu',
  'Mayar Sherif',
  'Katerina Siniakova',
  'Marie Bouzkova',
  'Lin Zhu',
  'Paula Badosa',
  'Marta Kostyuk',
  'Sorana-Mihaela Cirstea',
  'Shuai Zhang',
  'Sloane Stephens',
  'Anna Blinkova',
  'Varvara Gracheva',
  'Marketa Vondrousova',
  'Elisabetta Cocciaretto',
  'Jasmine Paolini',
  'Linda Noskova',
  'Lauren Davis',
  'Lucia Bronzetti',
  'Camila Giorgi',
  'Shelby Rogers',
  'Bianca Andreescu',
  'Anja Stankovic',
  'Yulia Starodubtseva',
  'Wild Seyboth',
  'Goncalo Oliveira',
  'Darja Semenistaja',
  'Antoine Hoang',
  'Dominic Thiem',
  'Francesco Passaro',
  'Nagi Hanatani',
  'Reka-Luca Jani'];

var atp_wta = 'atp'

if (atp_wta == 'atp') {
  var options = atp_list;
}
else {
  var options = wta_list;
}

for (var i = 0; i < options.length; i++) {
  var opt = options[i];

  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

var intContainer = document.getElementById("bagelhint");

function get_guess() {
  var selectedPlayer = document.getElementById("selectPlayer").value
  console.log(selectedPlayer)

  fetch("https://ci39xriub5.execute-api.us-east-2.amazonaws.com/bagelio_check?player_name=" + encodeURIComponent(selectedPlayer)),
    {
      'Access-Control-Allow-Origin': '*'
    }
      .then(response => response.text())
      .then(data => {
        // outputContainer.innerHTML = `<p align="left">${data}</p>`;
        console.log(data)
        if (data == 'false') {
          num_guesses += 1;
          console.log(num_guesses)
          intContainer.innerHTML = `<img src="../images/bageld/mystery_${num_guesses}.gif" width="100%">`
          // update progress bar
        }
        else {
          console.log(num_guesses)
          // update page for success
        }

      })
      .catch(error => {
        // outputContainer.innerHTML = "We ran into an error while getting reviews, try again in a bit.";
        console.error(error);
      });
}