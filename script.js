import { latinToMorse} from "./dicoMorse.js"


let text = 'Bonjour je suis Victoria'

function getLatinCharacterList(text){
    let tab = text.split("")
    return tab
}


function translateLatinCharacter(caractere){
    Object.entries(latinToMorse).forEach(function([key, value]) {
        if (caractere === key) {
            console.log(`${caractere} correspond à ${value} en morse.` )
        }
    })
} 


function encode(text){
    let tab = getLatinCharacterList(text)
    let tabMorse = []
    for (let i = 0; i < tab.length; i++){
        translateLatinCharacter(tab[i])
        tabMorse.push(translateLatinCharacter(tab[i]))
    }
    return tabMorse
}


encode(text)