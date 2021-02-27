const  btnSearch =document.querySelector('#search');
const searchInput = document.querySelector('.searchInput');

const openMenu =  document.querySelector('.open-menu');
const closeMenu=  document.querySelector('.btn-close-side-bar');
const sideBar =  document.querySelector('.side-bar');

// falta optimzar
btnSearch.addEventListener('click', ()=>{
   searchInput.classList.toggle('active');
   searchInput.select();
})

openMenu.addEventListener('click', ()=>{
   sideBar.classList.toggle('active')
})

closeMenu.addEventListener('click', ()=>{
   sideBar.classList.toggle('active')
})
