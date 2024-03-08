const cardTop = document.querySelector(".slide__item_card__top");
const original = document.querySelector(".original");
const strawberry = document.querySelector(".strawberry");
const chocolate = document.querySelector(".chocolate");
const igdSugar = document.querySelector(".sugar__wrapper b");
const igdSalt = document.querySelector('.salt__wrapper b');
const igdFat = document.querySelector('.fat__wrapper b');
const igdEnergy = document.querySelector('.energy__wrapper b');
const details = document.querySelector('.details__container .details');
const imgOrgin = document.querySelector('.origin_image');
const imgStraw = document.querySelector('.straw_image');
const imgChoco = document.querySelector('.choco_image');
const bodyBg = document.querySelector('body');
let itemPrice = document.querySelector('.item_price');


original.addEventListener("click", () => {
  bodyBg.style.background = 'var(--bg-body-origin)';
  cardTop.style.background = 'var(--bg-origin)';
  original.style.background = 'var(--bg-origin)';
  strawberry.style.background = 'none';
  chocolate.style.background = 'none';
  igdSugar.innerHTML = '3%';
  igdSalt.innerHTML = '5%';
  igdFat.innerHTML = '6%';
  igdEnergy.innerHTML = '30%';
  details.innerHTML = "We've perfected this recipe so every time you bite into it, the tasting is more than just a donut - it's pure joy.";
  imgOrgin.style.left = '30rem';
  imgStraw.style.left = '-60rem';
  imgChoco.style.left = '-60rem';
  itemPrice.innerHTML = '1,200원';
  itemPrice.style.background = 'var(--bg-price-origin)';


})

chocolate.addEventListener('click', () => {
  bodyBg.style.background = 'var(--bg-body-choco)';
  cardTop.style.background = 'var(--bg-choco)';
  chocolate.style.background = 'var(--bg-choco)';
  original.style.background = 'none';
  strawberry.style.background = 'none';
  igdSugar.innerHTML = '5%';
  igdSalt.innerHTML = '2%';
  igdFat.innerHTML = '8%';
  igdEnergy.innerHTML = '22%';
  details.innerHTML = "We took our classic ring donut, dipped it in truffle, topped it with chocolate buttons. It's time you said YES.";
  imgOrgin.style.left = '-60rem';
  imgStraw.style.left = '-60rem';
  imgChoco.style.left = '30rem';
  itemPrice.innerHTML = '2,500원';
  itemPrice.style.background = 'var(--bg-price-choco)';
});

strawberry.addEventListener("click", () => {
  bodyBg.style.background = 'var(--bg-body-straw)';
  cardTop.style.background = 'var(--bg-straw)';
  strawberry.style.background = 'var(--bg-straw)';
  original.style.background = 'none';
  chocolate.style.background = 'none'
  igdSugar.innerHTML = '4%';
  igdSalt.innerHTML = '3%';
  igdFat.innerHTML = '5%';
  igdEnergy.innerHTML = '28%';
  details.innerHTML = "We've taken our Original Donut, hand-dipped it in a strawberry truffle and topped it with fun rainbow sprinkles!";
  imgOrgin.style.left = '-60rem';
  imgStraw.style.left = '30rem';
  imgChoco.style.left = '-60rem';
  itemPrice.innerHTML = '2,400원';
  itemPrice.style.background = 'var(--bg-price-straw)';
})


//DOMContentLoaded : html문서의 모든 요소가 로드되고 dom트리가 완전히 생성된 후 실행
window.addEventListener('DOMContentLoaded', () => {
  strawberry.click();
  //chocolate.click() : 마치 사람이 마우스를 사용해 chocolate요소를 직접 클릭한 것처럼 동작 js요소를 가짜로 클릭하는 방법
  //chocolate.onclick() : 해당요소에 클릭 이벤트가 발생했을 때 실행되어야 하는 함수를 호출하는 것입니다
});