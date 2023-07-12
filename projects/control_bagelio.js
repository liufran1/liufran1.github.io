
let num_guesses = 0
var hashedAnswer = -1754947313 // Hardcoded
// let guessed = false
// console.log(num_guesses)

function hashAnswer(string) {
    var hash = 0;
    if (string.length == 0) return hash;
    for (x = 0; x <string.length; x++) {
    ch = string.charCodeAt(x);
            hash = ((hash <<5) - hash) + ch;
            hash = hash & hash;
        }
    return hash;
}

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

    if (atp_wta == 'atp' ) {
        var options = atp_list;
    }
    else {
        var options = wta_list;
    }

    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}

populateDropdown('atp')

var intContainer = document.getElementById("bagelhint");
var progressContainer = document.getElementById("progress");



function get_guess() {
    var selectedPlayer = document.getElementById("selectPlayer").value
    console.log(selectedPlayer)
    num_guesses +=1;

    if (hashAnswer(selectedPlayer)!=hashedAnswer) {
        console.log(num_guesses)
        intContainer.innerHTML = `<img src="../images/bageld/mystery_${num_guesses}.gif" width="100%">`
        progressContainer.innerHTML = `<p>${'🟨'.repeat(num_guesses)+'⬛️'.repeat(4-(num_guesses))}</p>`
                // update progress bar
    }
    else {
            console.log(num_guesses)
            intContainer.innerHTML =`<p>You solved it in ${num_guesses} guess${num_guesses > 1?'es':''}</p><p>Share your results: ${'🟨'.repeat(num_guesses-1)}🎾${'⬛️'.repeat(4-(num_guesses-1)-1)}</p>`
            progressContainer.innerHTML = ''
                // update page for success
        }
// 


    // fetch("https://ci39xriub5.execute-api.us-east-2.amazonaws.com/bagelio_check?player_name=" + encodeURIComponent(selectedPlayer)), 
    // {
    //  'Access-Control-Allow-Origin':'*'
    // } 
    //     .then(response => response.text())
    //     .then(data => {
    //       // outputContainer.innerHTML = `<p align="left">${data}</p>`;
    //      console.log(data)
    //      if (data=='false') {
    //          num_guesses +=1;
    //          console.log(num_guesses)
    //          intContainer.innerHTML = `<img src="../images/mystery_${num_guesses}.gif" width="100%">`
    //          // update progress bar
    //      }
    //      else {
    //          console.log(num_guesses)
    //          // update page for success
    //      }
            
    //     })
    //     .catch(error => {
    //       // outputContainer.innerHTML = "We ran into an error while getting reviews, try again in a bit.";
    //       console.error(error);
    //     });
}
