
// let protour = 'wta' // Hardcoded
// let hashedAnswer = 77095263
let getparams = true
// let hashedAnswer = 0
let experimentMessage = '<p>Thanks for playing! bageld is currently in beta, so there are still kinks to work out and there won\'t be daily updates just yet. Check back soon for improvements </p>'

let hashedAnswer = document.getElementById('hashedAnswer').getAttribute('hashAnswer')


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

function get_tour_list(atp_wta) {
  const atp_list = [{value: 'Carlos Alcaraz', text: 'Carlos Alcaraz'},
 {value: 'Novak Djokovic', text: 'Novak Djokovic'},
 {value: 'Daniil Medvedev', text: 'Daniil Medvedev'},
 {value: 'Casper Ruud', text: 'Casper Ruud'},
 {value: 'Stefanos Tsitsipas', text: 'Stefanos Tsitsipas'},
 {value: 'Holger Rune', text: 'Holger Rune'},
 {value: 'Andrey Rublev', text: 'Andrey Rublev'},
 {value: 'Jannik Sinner', text: 'Jannik Sinner'},
 {value: 'Taylor Fritz', text: 'Taylor Fritz'},
 {value: 'Frances Tiafoe', text: 'Frances Tiafoe'},
 {value: 'Karen Khachanov', text: 'Karen Khachanov'},
 {value: 'Aliassime Auger', text: 'Aliassime Auger'},
 {value: 'Cameron Norrie', text: 'Cameron Norrie'},
 {value: 'Borna Coric', text: 'Borna Coric'},
 {value: 'Tommy Paul', text: 'Tommy Paul'},
 {value: 'Lorenzo Musetti', text: 'Lorenzo Musetti'},
 {value: 'Minaur De', text: 'Minaur De'},
 {value: 'Hubert Hurkacz', text: 'Hubert Hurkacz'},
 {value: 'Francisco Cerundolo', text: 'Francisco Cerundolo'},
 {value: 'Pablo Carreno-Busta', text: 'Pablo Carreno-Busta'},
 {value: 'Alexander Zverev', text: 'Alexander Zverev'},
 {value: 'Jan-Lennard Struff', text: 'Jan-Lennard Struff'},
 {value: 'Roberto Bautista-Agut', text: 'Roberto Bautista-Agut'},
 {value: 'Grigor Dimitrov', text: 'Grigor Dimitrov'},
 {value: 'Sebastian Korda', text: 'Sebastian Korda'},
 {value: 'Alexander Bublik', text: 'Alexander Bublik'},
 {value: 'Yoshihito Nishioka', text: 'Yoshihito Nishioka'},
 {value: 'Nicolas Jarry', text: 'Nicolas Jarry'},
 {value: 'Denis Shapovalov', text: 'Denis Shapovalov'},
 {value: 'Daniel Evans', text: 'Daniel Evans'},
 {value: 'Tallon Griekspoor', text: 'Tallon Griekspoor'},
 {value: 'Tomas Etcheverry', text: 'Tomas Etcheverry'},
 {value: 'Nick Kyrgios', text: 'Nick Kyrgios'},
 {value: 'Fokina Davidovich', text: 'Fokina Davidovich'},
 {value: 'Adrian Mannarino', text: 'Adrian Mannarino'},
 {value: 'Ben Shelton', text: 'Ben Shelton'},
 {value: 'Jiri Lehecka', text: 'Jiri Lehecka'},
 {value: 'Matteo Berrettini', text: 'Matteo Berrettini'},
 {value: 'Ugo Humbert', text: 'Ugo Humbert'},
 {value: 'Andy Murray', text: 'Andy Murray'},
 {value: 'Miomir Kecmanovic', text: 'Miomir Kecmanovic'},
 {value: 'Lorenzo Sonego', text: 'Lorenzo Sonego'},
 {value: 'Christopher Eubanks', text: 'Christopher Eubanks'},
 {value: 'De Van', text: 'De Van'},
 {value: 'Yannick Hanfmann', text: 'Yannick Hanfmann'},
 {value: 'Sebastian Baez', text: 'Sebastian Baez'},
 {value: 'Emil Ruusuvuori', text: 'Emil Ruusuvuori'},
 {value: 'Jeffrey Wolf', text: 'Jeffrey Wolf'},
 {value: 'Gregoire Barrere', text: 'Gregoire Barrere'},
 {value: 'Aslan Karatsev', text: 'Aslan Karatsev'},
 {value: 'Anja Stankovic', text: 'Anja Stankovic'},
 {value: 'Yulia Starodubtseva', text: 'Yulia Starodubtseva'},
 {value: 'Stefania Bojica', text: 'Stefania Bojica'},
 {value: 'Wild Seyboth', text: 'Wild Seyboth'},
 {value: 'Goncalo Oliveira', text: 'Goncalo Oliveira'},
 {value: 'Antoine Hoang', text: 'Antoine Hoang'},
 {value: 'Dominic Thiem', text: 'Dominic Thiem'},
 {value: 'Francesco Passaro', text: 'Francesco Passaro'},
 {value: 'Nagi Hanatani', text: 'Nagi Hanatani'},
 {value: 'Reka-Luca Jani', text: 'Reka-Luca Jani'}];
  const wta_list = [{value: 'Iga Swiatek', text: 'Iga Swiatek'},
 {value: 'Aryna Sabalenka', text: 'Aryna Sabalenka'},
 {value: 'Elena Rybakina', text: 'Elena Rybakina'},
 {value: 'Jessica Pegula', text: 'Jessica Pegula'},
 {value: 'Caroline Garcia', text: 'Caroline Garcia'},
 {value: 'Ons Jabeur', text: 'Ons Jabeur'},
 {value: 'Cori Gauff', text: 'Cori Gauff'},
 {value: 'Maria Sakkari', text: 'Maria Sakkari'},
 {value: 'Petra Kvitova', text: 'Petra Kvitova'},
 {value: 'Darya Kasatkina', text: 'Darya Kasatkina'},
 {value: 'Barbora Krejcikova', text: 'Barbora Krejcikova'},
 {value: 'Veronika Kudermetova', text: 'Veronika Kudermetova'},
 {value: 'Maia Haddad', text: 'Maia Haddad'},
 {value: 'Belinda Bencic', text: 'Belinda Bencic'},
 {value: 'Ludmilla Samsonova', text: 'Ludmilla Samsonova'},
 {value: 'Karolina Muchova', text: 'Karolina Muchova'},
 {value: 'Jelena Ostapenko', text: 'Jelena Ostapenko'},
 {value: 'Madison Keys', text: 'Madison Keys'},
 {value: 'Karolina Pliskova', text: 'Karolina Pliskova'},
 {value: 'Viktoria Azarenka', text: 'Viktoria Azarenka'},
 {value: 'Donna Vekic', text: 'Donna Vekic'},
 {value: 'Ekaterina Alexandrova', text: 'Ekaterina Alexandrova'},
 {value: 'Anastasia Potapova', text: 'Anastasia Potapova'},
 {value: 'Magda Linette', text: 'Magda Linette'},
 {value: 'Qinwen Zheng', text: 'Qinwen Zheng'},
 {value: 'Anhelina Kalinina', text: 'Anhelina Kalinina'},
 {value: 'Bernarda Pera', text: 'Bernarda Pera'},
 {value: 'Elise Mertens', text: 'Elise Mertens'},
 {value: 'Petra Martic', text: 'Petra Martic'},
 {value: 'Irina Begu', text: 'Irina Begu'},
 {value: 'Mayar Sherif', text: 'Mayar Sherif'},
 {value: 'Katerina Siniakova', text: 'Katerina Siniakova'},
 {value: 'Marie Bouzkova', text: 'Marie Bouzkova'},
 {value: 'Lin Zhu', text: 'Lin Zhu'},
 {value: 'Paula Badosa', text: 'Paula Badosa'},
 {value: 'Marta Kostyuk', text: 'Marta Kostyuk'},
 {value: 'Sorana-Mihaela Cirstea', text: 'Sorana-Mihaela Cirstea'},
 {value: 'Shuai Zhang', text: 'Shuai Zhang'},
 {value: 'Sloane Stephens', text: 'Sloane Stephens'},
 {value: 'Anna Blinkova', text: 'Anna Blinkova'},
 {value: 'Varvara Gracheva', text: 'Varvara Gracheva'},
 {value: 'Marketa Vondrousova', text: 'Marketa Vondrousova'},
 {value: 'Elisabetta Cocciaretto', text: 'Elisabetta Cocciaretto'},
 {value: 'Jasmine Paolini', text: 'Jasmine Paolini'},
 {value: 'Linda Noskova', text: 'Linda Noskova'},
 {value: 'Lauren Davis', text: 'Lauren Davis'},
 {value: 'Lucia Bronzetti', text: 'Lucia Bronzetti'},
 {value: 'Camila Giorgi', text: 'Camila Giorgi'},
 {value: 'Shelby Rogers', text: 'Shelby Rogers'},
 {value: 'Bianca Andreescu', text: 'Bianca Andreescu'},
 {value: 'Anja Stankovic', text: 'Anja Stankovic'},
 {value: 'Yulia Starodubtseva', text: 'Yulia Starodubtseva'},
 {value: 'Stefania Bojica', text: 'Stefania Bojica'},
 {value: 'Wild Seyboth', text: 'Wild Seyboth'},
 {value: 'Goncalo Oliveira', text: 'Goncalo Oliveira'},
 {value: 'Antoine Hoang', text: 'Antoine Hoang'},
 {value: 'Dominic Thiem', text: 'Dominic Thiem'},
 {value: 'Francesco Passaro', text: 'Francesco Passaro'},
 {value: 'Nagi Hanatani', text: 'Nagi Hanatani'},
 {value: 'Reka-Luca Jani', text: 'Reka-Luca Jani'}];
}



var dropdown = ""


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
  // populateDropdown(protour)
  dropdown =   jSuites.dropdown(document.getElementById('dropdown'), {
    data:get_tour_list(protour),
    width:'280px',
    autocomplete: true,
});

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

  console.log(jsondata)
  console.log(dropdown.getValue())
  // var selectedPlayer = document.getElementById("selectPlayer").value
  var selectedPlayer = dropdown.getValue()
  if (selectedPlayer.length == 0) {
    console.log(selectedPlayer);
  }
  else {
    console.log(selectedPlayer)
    console.log(hashAnswer(selectedPlayer.toUpperCase()))
    num_guesses += 1;

    console.log(jsondata['answerHash'])

    if (hashAnswer(selectedPlayer.toUpperCase()) != jsondata['answerHash']) {
      if (num_guesses == 4) {
        hintContainer.innerHTML = experimentMessage+`<p>Sorry, better luck next time</p><p>Share your results: ${'🟨'.repeat(num_guesses)}</p>` + shareButton
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
      hintContainer.innerHTML = experimentMessage + `<p>You solved it in ${num_guesses} guess${num_guesses > 1 ? 'es' : ''}</p><p>Share your results: ${'🟨'.repeat(num_guesses - 1)}🎾${'⬛️'.repeat(4 - (num_guesses - 1) - 1)}</p>` + shareButton
      progressContainer.innerHTML = ''
      inputSelector.remove()
      // update page for success
    }
  }

}
