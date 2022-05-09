window.addEventListener('scroll', theScroll)
theScroll()
function theScroll() {
  showTheNumbers()
  backToTopButtonOnScroll()
  showNavOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(contact)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(testimonials)
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
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides:true,
  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },
  slidesPerview:'auto',
  coverflowEffect: {
    rotate:50,
    stretch:0,
    depth:100,
    modifier:1,
    slideShadows:true,
  },
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


  // menu ativo conforme seção visivel na pagina.





  function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    //verificar se a seção passou da linha
    // quais dados vou precisar?

      // o topo da seção 
    const sectionTop = section.offsetTop

    //a altura da seção.
    const sectionHeight = section.offsetHeight

    // o topo da seção chegou ou ultrapassou a linha alvo.
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop





    console.log(sectionTopReachOrPassedTargetline)
    //verificar se a base está a baixo da linha alvo
    // quais dados vou precisar ?

    const sectionEndsAt = sectionTop + sectionHeight

    // o final da seção passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    //limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline 
    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
      menuElement.classList.add('active')
    }



  }



