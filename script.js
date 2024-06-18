// 4. Write a JavaScript program to remove items(clicking on a button) from a drop-down list.
 
document.getElementById('btn').addEventListener('click',funcion1)

function funcion1(){
    const parent = document.getElementById('colorSelect')
    const target = parent.lastElementChild
    parent.removeChild(target)
}