import { latinToMorse} from "./dicoMorse.js"

const btn_encodeur = document.getElementById('btn_encodeur')
const encodeur = document.getElementById('encodeur')

let text = 'Bonjour je suis Victoria'

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
    console.log(tabMorse.join("")) 
}

btn_encodeur.addEventListener('click', encode(encodeur.value))


encode(text)