

const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")


const click = document.getElementById("img")


// click.addEventListener("click", ageApp)

let date = new Date()

function ageApp() {

    




}



function month() {
    let currentMonth = date.getMonth() + 1
    
    if(currentMonth >= month.value){
        document.getElementById("m").textContent = currentMonth - month.value
    }
    else if( currentMonth < month.value){
        document.getElementById("m").textContent = 12 - currentMonth
    }
    
}

function day() {
    let currentdate = date.getDate() 
    
    if(currentdate >= day.value){
        
        document.getElementById("d").textContent = currentdate - day.value
    }
    else if( currentdate < day.value){

        document.getElementById("d").textContent = 12 - currentMonth
    }
}


function month() {
    
    let currentMonth = date.getMonth() + 1
    if(currentMonth >= month.value){
        
        document.getElementById("m").textContent = currentMonth - month.value
    }else if( currentMonth < month.value){

        document.getElementById("m").textContent = 12 - currentMonth
    }
    
}




























