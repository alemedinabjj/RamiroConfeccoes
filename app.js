window.addEventListener('scroll', theScroll)
theScroll()
function theScroll() {
  showTheNumbers()
  backToTopButtonOnScroll()
  showNavOnScroll()
}
function showTheNumbers() {
   
  if (scrollY > 110 && scrollY < 150) {
    const numero = document.querySelector('#clientes')
    let min = 400
    let max = 500
    const conta = window.setInterval(function () {
      numero.innerHTML = '+' + min + ' '
      if (min == max) window.clearInterval(conta)
      min++
    }, 30)

    const anos = document.querySelector('#anos')
    const confeccao = document.querySelector('#confeccao')

    let minAnos = 0
    let maxAnos = 20

    const anosMax = window.setInterval(function () {
      anos.innerHTML = '+' + minAnos + ' '
      if (minAnos == maxAnos) window.clearInterval(anosMax)
      minAnos++
    }, 100)

    let minConfeccao = 0
    let maxConfeccao = 10

    const confeccaoMax = window.setInterval(function () {
      confeccao.innerHTML = '+' + minConfeccao + ' '
      if (minConfeccao == maxConfeccao) window.clearInterval(confeccaoMax)
      minConfeccao++
    }, 100)
  }
}
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function backToTopButtonOnScroll(){
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  }else {
    backToTopButton.classList.remove('show')
  }
}


const btnMenu = document.querySelector('.btnmenu')

btnMenu.addEventListener('click', function () {
  document.body.classList.toggle('menu-expended')
})

const links = document.querySelectorAll('.menu ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    document.body.classList.remove('menu-expended')
  })
}

function clickMenu() {
  btnMenu.classList.toggle('change')
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerview: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
}).reveal(`#home,
 #home img, 
 #home .stats,
  #services, 
  #services header,
  #services .cards,
  #about, 
  #about header,
  #about .content,
  #about img,
  #testimonials header,
  #testimonials .content,
  #contact header,
  #contact .content
  
  `)


