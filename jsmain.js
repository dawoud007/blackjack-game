// type coration
/*   let pp = "mom loves
console.log(pp.substr(-5, 3))
console.log(pp.substring(-5, 3))
console.log(pp.includes("lov"))
console.log(pp.endsWith("es", 9))
console.log(pp.slice(1, 5).charAt(0).toUpperCase())
console.log(pp.substr(4, 5))
console.log(pp.length)
if (pp.includes("s") == Boolean("s")) {
console.log("you are right")
} else {
console.log("no")

}*/
//###########################
/*let mname = "ali"
let gender = "female"
let age = 50
let result = gender === "male" ? "Mr" : "mrs"
console.log(`hello ${result} ${mname}`)
age < 20 ? console.log("less than 20") : ag
*/
/*####################################################
let day = "dev"

switch (day) {
    case "man":
        console.log("sat")
        break
    case "dev":
    case "it":
        console.log("5000")
        break
    default:
        console.log("unknown")
}*/
/*
let mf = ["vv", "ee", "ef", "ll"]
console.log(mf.lastIndexOf("ee"))
console.log(mf.includes("ee", 2))
mf.splice(2, 2, "kaled", "sally")
let ol = ['ff', "dd", "aa", "rr", 'rr']
let po = ["kl", ";;"]
let all = ol.concat(mf, po, [1, 5, 6])
console.log(all)
console.log(all.join("@").toLocaleLowerCase())*/
/*######################################################
let zero = 0
let counter = 3
let my = ["ahmed", "mazero", "Elham", "osama", "Gamal", "Ameer"]
my.splice(4, 2)
my[0] = "osama", my[3] = "ahmed"

console.log(my)
my.splice(0, 1), my.splice(2, 1)
console.log(my)
my.splice(0, 2, 'ELzero')
console.log(my)
my = my[0].slice(4), my[1] = "O"
console.log(my)

let countEl = document.getElementById("count")
let peoplein = document.getElementById("people")
let v = 1

function incre() {

    v = v + 1
    countEl.innerText = v
}

function save() {
    let peoplenum = v + "-"

    peoplein.innerText += peoplenum
}*/
/*$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*/
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let message = ""
let messageEL = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Per",
    chips: 200
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    console.log(message)
    messageEL.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function getRandomCard() {

    let randomNumer = Math.floor(Math.random() * 13) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }


}