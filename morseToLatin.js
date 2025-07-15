import { morseToLatin } from "./dicoMorse.js"

let sentence = "-... --- -. .--- --- ..- .-./.--- ./... ..- .. .../...- .. -.-. - --- .-. .. .-"

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
    console.log(tab)
    let tabLatin = []
    let morseInLetter = ""
    for (let i = 0; i < tab.length; i++){
        morseInLetter = translateMorseCharacter(tab[i])
        tabLatin.push(morseInLetter)
        
    }
    console.log(tabLatin.join("")) 
}


decode(sentence)