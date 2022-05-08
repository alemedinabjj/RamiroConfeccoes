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


  //  DARK MODE 

  const html = document.querySelector('html')
  console.log(html)
  const checkbox = document.querySelector('input[name=theme]')

  const getStyle = (element, style) => 
  window.getComputedStyle(element)
  .getPropertyValue(style)

  const initialColors = {
    bg: getStyle(html, '--bg'),
    brandDark: getStyle(html, '--brand-dark'),
    paragraph: getStyle(html, '--paragraph'),
    primaryColor: getStyle(html, '--primary-color'),
    brandBeige: getStyle(html, '--brand-beige'),
    brandLight: getStyle(html, '--brand-light'),
    headline: getStyle(html, '--headline'),
    colorText: getStyle(html, '--color-text')
  }

  const darkMode = {
    brandDark: '#0a2b9c',
    paragraph: '#fff',
    brandLight: '#333',
    brandBeige: '#212121',
    bg: '#333333',
    primaryColor: '#3664FF',
    headline: '#3664FF',
    colorText: '#B5B5B5'
  }

  const transformKeys = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

  const changeColors = (colors) => {
    Object.keys(colors).map(key =>
      html.style.setProperty(transformKeys(key), colors[key])
      )
  }

  checkbox.addEventListener('change', ({target}) =>{
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
  })

