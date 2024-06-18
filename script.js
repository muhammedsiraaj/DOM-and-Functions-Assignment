// 4. Write a JavaScript program to remove items(clicking on a button) from a drop-down list.
 
document.getElementById('btn').addEventListener('click',funcion1)

function funcion1(){
    const parent = document.getElementById('colorSelect')
    const target = parent.lastElementChild
    parent.removeChild(target)
}


// 5. Write a JavaScript program to change the  color given text in p tag 

function changeTextColor() {
    const colorSelect = document.getElementById("colorSelect2");
    const selectedColor = colorSelect2.value;
    const sampleText = document.getElementById("sampleText");
    sampleText.style.color = selectedColor;
}