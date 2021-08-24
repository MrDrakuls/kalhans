// popup.onclick = function () {
//     popup.style.backgroundColor = '#a59d8d';
//     popup.style.color = 'white';
// }


let cart_minus = document.querySelector('.cart_minus');
let cart_numbers = document.querySelector('.cart_numbers');
let cart_plus = document.querySelector('.cart_plus');

cart_minus.addEventListener('click', function () {
  if (Number.parseInt(cart_numbers.innerText) > 0) {
    cart_numbers.innerText = Number.parseInt(cart_numbers.innerText)-1;
  } 
});

cart_plus.addEventListener('click', function () {
  if (cart_numbers.innerText.length <=6 ) {
    cart_numbers.innerText = Number.parseInt(cart_numbers.innerText)+1;
  } 
});
