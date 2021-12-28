
const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

colorBtn.addEventListener("click",faveColor)
placeBtn.addEventListener("click",favePlace)
ritualBtn.addEventListener("click",faveRitual)


function faveColor(){
    alert("Purple")
}

function favePlace(){
    alert("Santa Barbara, CA")
}

function faveRitual(){
    alert("Halloween!")
}


