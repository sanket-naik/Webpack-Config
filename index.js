import { validInputs } from "./utils/utils"

let input1=document.getElementById('input1')
let input2=document.getElementById('input2')
let result=document.getElementById('result')
let error=document.getElementById('error')

document.getElementById("add").addEventListener('click',function(){
    console.log(input1.value)

    if(validInputs(input1.value, input2.value)){
        result.innerHTML=`Result: ${parseInt(input1.value)+parseInt(input2.value)}`
    }else{
        error.innerHTML='Please enter valid numbers'
    }
})