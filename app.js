
var number=document.getElementById("input" )

function getnumber(num){
    
    number.value+=num

}
function getoprator(){
    number.value=eval(number.value)
}


function getRemove() {
    number.value=""

}
function getdelet(){
    number.value=number.value.slice(0,-1)
}















