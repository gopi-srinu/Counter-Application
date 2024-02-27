let initialValue = 0;
let result = document.getElementById("count").innerHTML = initialValue;

function incrementCount(){
    initialValue +=1;
    document.getElementById("count").innerHTML = initialValue;
}

function decrementCount(){
    if(initialValue > 0){
        initialValue -=1;
        document.getElementById("count").innerHTML = initialValue;
    }
}

function resetCount(){
    initialValue = 0;
    document.getElementById("count").innerHTML = initialValue;
}