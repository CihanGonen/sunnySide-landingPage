const btnHamburger = document.querySelector('#btnHamburger');
const popUpMenu = document.querySelector('#popUpMenu');

btnHamburger.addEventListener('click',()=>{
  if(popUpMenu.classList.contains('fade-in')){
    popUpMenu.classList.remove('fade-in');
    popUpMenu.classList.add('fade-out');
  }else{
    popUpMenu.classList.remove('fade-out');
    popUpMenu.classList.add('fade-in');
  }
})