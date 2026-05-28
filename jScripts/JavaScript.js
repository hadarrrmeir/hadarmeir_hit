function culculateNum(){
let num1= parseInt(document.getElementById("text1").value);
let num2= parseInt(document.getElementById("text2").value);
let num3= parseInt(document.getElementById("text3").value);


let avgNum= (num1+num2+num3) / 3;

document.getElementById("result").innerHTML= 'ממוצע הציונים הוא:' + avgNum.toString();
}