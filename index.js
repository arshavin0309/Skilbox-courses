window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function (){
    document.querySelector('.header__nav').classList.toggle('is_active')
  })
})