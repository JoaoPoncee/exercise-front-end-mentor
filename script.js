const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btnSubmit = document.querySelector("#btnSubmit");
const popUp = document.querySelector("#pop-up");
const divSelectOption = document.querySelector("#selectOption");
const divContainer = document.querySelector("#container");
let rating = 0

btn1.addEventListener('click', ()=>{
    rating = 1;
})
btn2.addEventListener('click', ()=>{
    rating = 2;
})
btn3.addEventListener('click', ()=>{
    rating = 3;
})
btn4.addEventListener('click', ()=>{
    rating = 4;
})
btn5.addEventListener('click', ()=>{
    rating = 5;
})

btnSubmit.addEventListener("click", () => {
  if(rating != 0){
    popUp.style.display = "flex";
    divContainer.style.display = "none";
    divSelectOption.innerHTML = `<h4 class="h4Select">You selected ${rating} out of 5</h4>`
  }else{
    alert('select any option')
  }
  
});
