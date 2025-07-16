import { morseToLatin } from "./dicoMorse.js"

const btn_decodeur = document.getElementById('btn_decodeur')
const decodeur = document.getElementById('decodeur')
const resultatPM = document.getElementById('resultat_p_m')

function getMorseCharacterList(sentence){
    let tab = sentence.split("/")
    let tabCase = []
    let tabFinal = []
    for (let i=0; i<tab.length; i++){
        tabCase = tab[i].split(" ")
        for (let j=0; j<tabCase.length; j++){
            tabFinal.push(tabCase[j])
        }
        tabFinal.push(' ')
    }
    return tabFinal
}


function translateMorseCharacter(morse){
    let morseInLetter = ""
    Object.entries(morseToLatin).forEach(function([key, value]) {
        if (morse === key) {
            morseInLetter = value          
        }
    })
    return morseInLetter
}

translateMorseCharacter

function decode(sentence){
    let tab = getMorseCharacterList(sentence)

    let tabLatin = []
    let morseInLetter = ""
    for (let i = 0; i < tab.length; i++){
        morseInLetter = translateMorseCharacter(tab[i])
        tabLatin.push(morseInLetter)
        
    }
    return (tabLatin.join("")) 
}

function displayDecode(valeur){
    resultatPM.innerText = `Résultat : ${valeur}`
}


btn_decodeur.addEventListener('click', () => {
    let latinValue = decode(decodeur.value)
    displayDecode(latinValue)
    })
