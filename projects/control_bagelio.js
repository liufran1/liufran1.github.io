
// let protour = 'wta' // Hardcoded
// let hashedAnswer = 77095263
let getparams = true
// let hashedAnswer = 0


let hashedAnswer = document.getElementById('hashAnswer').getAttribute('hashedAnswer')


// let test_value = 0

let jsondata = "";
let apiUrl = "https://ci39xriub5.execute-api.us-east-2.amazonaws.com/bagelio_check"

async function getJson(url) {
  let response = await fetch(url);
  let data = await response.json()
  return data;
}

// let response = await fetch()
// let hashedAnswer = response.text['answerHash']
// let protour = response.text['tour']

// console.log(response.text)



// let guessed = false
// console.log(num_guesses)

function hashAnswer(string) {
  var hash = 1;
  if (string.length == 0) return hash;
  for (x = 0; x < string.length; x++) {
    ch = string.charCodeAt(x);
    hash = (hash * ch) % 100000000 + 1;
  }
  return hash;
}


// $('select').change(function() {
// // alert("hi");
//     var op =$(this).val();
//     if(op !='') {                 
//     $('input[name="processor_details"]').prop('disabled',false);
// } else {
//     $('input[name="processor_details"]').prop('disabled', true);
// }   
// });


function populateDropdown(atp_wta) {
  var select = document.getElementById("selectPlayer");

  // Hardcode these lists to start
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

  // var atp_wta = 'atp'

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
}

function clipboardShare() {
  // Get the text field
  // var copyText = document.getElementById("myInput");
  if (num_guesses == 4) {
    var textData = `My bageld score:  \n${'🟨'.repeat(4)} \n https://liufran1.github.io/projects/bageld`

  }
  else {
    var textData = `My bageld score:  \n${'🟨'.repeat(num_guesses - 1)}🎾${'⬛️'.repeat(4 - (num_guesses - 1) - 1)} \n https://liufran1.github.io/projects/bageld`
  }



  // Select the text field
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(textData).then(function() { alert("Result copied to clipboard "); });

  // Alert the copied text

}


async function main() {

  jsondata = await getJson(apiUrl)
  console.log(jsondata);
  console.log('API call successful')
  // test_value += 1
  getparams = false

  let hashedAnswer = jsondata['answerHash']
  let protour = jsondata['tour']
  populateDropdown(protour)
  document.getElementById('hashedAnswer').setAttribute('hashAnswer', hashedAnswer) // I don't understand javascript lmao

}

if (getparams) {
  main();
}

console.log(hashedAnswer)

// populateDropdown(protour)

// var inputButton = document.getElementById("inputButton");
let num_guesses = 0

// let selectedPlayer = document.getElementById("selectPlayer").value
// if (selectedPlayer.length>0){
//     inputButton.prop('disabled',false);
// }

function get_guess() {
  var hintContainer = document.getElementById("bagelhint");
  var progressContainer = document.getElementById("progress");
  var inputSelector = document.getElementById("inputSelector");
  var shareButton = "<button onclick=\"clipboardShare()\">Share</button>"


  var selectedPlayer = document.getElementById("selectPlayer").value
  if (selectedPlayer.length == 0) {
    console.log(selectedPlayer);
  }
  else {
    console.log(selectedPlayer)
    num_guesses += 1;

    if (hashAnswer(selectedPlayer.toUpperCase()) != hashedAnswer) {
      if (num_guesses == 4) {
        hintContainer.innerHTML = `<p>Sorry, better luck next time</p><p>Share your results: ${'🟨'.repeat(num_guesses)}</p>` + shareButton
        progressContainer.innerHTML = ''
        inputSelector.remove()
      }
      else {
        // console.log(num_guesses)
        hintContainer.innerHTML = `<img src="https://bagelio-files.s3.us-east-2.amazonaws.com/gifs/mystery_${num_guesses}.gif" width="100%">`
        progressContainer.innerHTML = `<p>${'🟨'.repeat(num_guesses) + '⬛️'.repeat(4 - (num_guesses))}</p>`

      }
    }
    else {
      console.log(num_guesses)
      hintContainer.innerHTML = `<p>You solved it in ${num_guesses} guess${num_guesses > 1 ? 'es' : ''}</p><p>Share your results: ${'🟨'.repeat(num_guesses - 1)}🎾${'⬛️'.repeat(4 - (num_guesses - 1) - 1)}</p>` + shareButton
      progressContainer.innerHTML = ''
      inputSelector.remove()
      // update page for success
    }
  }

}
