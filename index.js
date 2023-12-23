const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLen = 15
let charArrLen=characters.length // so we don't call this over and over in the loop

const genPassword = () => {
    let passOne = ""
    let passTwo = "" 
    
    let passElOne = document.getElementById("password-one")
    let passElTwo = document.getElementById("password-two")
    
    for(let i=0;i<passwordLen;i++){
        randIdx = Math.floor(Math.random() * charArrLen)
        passOne += characters[randIdx]
        randIdx = Math.floor(Math.random() * charArrLen)
        passTwo+= characters[randIdx] 
        
    }
    
    passElOne.textContent = passOne
    passElTwo.textContent = passTwo
    
    console.log(passOne, passTwo)
}

const copyPassword = (elemId) => {
    // taken from: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    console.log(`called for id: ${elemId}`)
    
    // this supposedly doesn't work in scrimba but does
    // work in local dev
    let passEl = document.querySelector(elemId)
    Navigator.clipboard.writeText(passEl.innerText)
    
    

}



