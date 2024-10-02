var hamburguerButton = document.getElementById('hamburguer-button')
var hamburguerButtonBack = document.getElementById('hamburguer-button-back')
var header = document.getElementById('header')
var main = document.getElementById('main')

var burguerMenu = document.getElementById('burguer-menu')


hamburguerButton.addEventListener('click', function() {
    burguerMenu.classList.toggle('hidden')
    hamburguerButton.classList.toggle('hidden')
    main.classList.toggle('opacity-10')
})

hamburguerButtonBack.addEventListener('click', function() {
    burguerMenu.classList.toggle('hidden')
    hamburguerButton.classList.toggle('hidden')
    main.classList.toggle('opacity-10')
})