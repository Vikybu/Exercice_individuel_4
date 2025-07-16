import { latinToMorse} from "./dicoMorse.js"

const btn_encodeur = document.getElementById('btn_encodeur')
const encodeur = document.getElementById('encodeur')
const resultatP = document.getElementById('resultat_p')

function getLatinCharacterList(text){
    let tab = text.split("")
    let tabCase = []
    for (let i=0; i<tab.length; i++){
        let letter = tab[i].toUpperCase()
        tabCase.push(letter)
    }
    return tabCase
}


function translateLatinCharacter(caractere){
    let letterInMorse = ""
    Object.entries(latinToMorse).forEach(function([key, value]) {
        if (caractere === key) {
            letterInMorse = value           
        }
    })
    return letterInMorse

} 


function encode(text){
    let tab = getLatinCharacterList(text)
    let tabMorse = []
    let letterInMorse = ""
    for (let i = 0; i < tab.length; i++){
        letterInMorse = translateLatinCharacter(tab[i])
        tabMorse.push(letterInMorse)
    }
    return (tabMorse.join("")) 
}

function displayEncode(valeur){
    resultatP.innerText = `Résultat : ${valeur}`
}

btn_encodeur.addEventListener('click', () => {
    let morseValue = encode(encodeur.value)
    displayEncode(morseValue)
    })
