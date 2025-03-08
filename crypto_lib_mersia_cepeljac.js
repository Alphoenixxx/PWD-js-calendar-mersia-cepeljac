//Partie1
function what_are_words_worth() {
    let word = prompt("Entrez un mot ou une phrase :");
    if (!word) return false;  

    let length = word.length;
    let confirmation = confirm(`Votre entrée "${word}" comporte ${length} caractère(s). Validez-vous ?`);

    return confirmation;
}


//Partie 2
function count_words(string_of_words) {
    if (!string_of_words || string_of_words.length === 0) return 0;

    let count = 0;
    let insideWord = false;

    for (let i = 0; i < string_of_words.length; i++) {
        let char = string_of_words.charAt(i);

        if (char !== ' ') {
            if (!insideWord) { 
                count++;
                insideWord = true;
            }
        } else {
            insideWord = false;
        }
    }

    return count;
}


//Partie 3
function count_words_by(string_of_words, letter) {
    if (!string_of_words || string_of_words.length === 0) return 0;
    if (!letter || letter.length === 0) letter = ' '; // Si `letter` n'est pas défini, on utilise l'espace

    let count = 0;
    let insideWord = false;

    for (let i = 0; i < string_of_words.length; i++) {
        let char = string_of_words.charAt(i);

        if (char !== letter) {
            if (!insideWord) {
                count++;
                insideWord = true;
            }
        } else {
            insideWord = false;
        }
    }

    return count;
}


//Partie 4
function is_a_vowel(letter) {
    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            return true;
        }
    }
    return false;
}

function count_vowels(string_of_words) {
    if (!string_of_words || string_of_words.length === 0) return 0;

    let count = 0;

    for (let i = 0; i < string_of_words.length; i++) {
        if (is_a_vowel(string_of_words.charAt(i))) {
            count++;
        }
    }

    return count;
}

//Partie 5
function count_consonants(string_of_words) {
    return string_of_words ? string_of_words.length - count_vowels(string_of_words) - (string_of_words.split(' ').length - 1) : 0;
}

//Partie 6 
function remove(string_of_words, character) {
    return string_of_words ? string_of_words.split(character).join('') : '';
}

//Partie 7
function remove_strings(string_of_words, characters) {
    return string_of_words ? string_of_words.split('').filter(c => !characters.includes(c)).join('') : '';
}

//Partie 8
function crypto(a_string, a_number) {
    if (!a_string || a_string.length === 0) return ''; 

    let result = '';
    
    for (let i = 0; i < a_string.length; i++) {
        let char = a_string.charAt(i);

        if (alphabet.includes(char)) {
            let newIndex = (alphabet.indexOf(char) + a_number) % alphabet.length;
            result += alphabet.charAt(newIndex);
        } else if (alphabet_upper.includes(char)) {
            let newIndex = (alphabet_upper.indexOf(char) + a_number) % alphabet_upper.length;
            result += alphabet_upper.charAt(newIndex);
        } else {
            result += char;
        }
    }

    return result;
}

//Partie 9
function decrypt(a_string, a_number) {
    return crypto(a_string, (26 - a_number) % 26);
}

