/*--Show Menu--*/

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')


/*--Menu Show--*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*--Menu Hidden--*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*--Remove Menu Mobile--*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*--Add Blur--*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //add a class if the bottom offset is greater
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        :header.classList.remove('blur-header')
}
window.addEventListener("scroll", blurHeader)


/*--Email JS--*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //sevice ID - TemplateID - #form - publickey
    emailjs.sendForm('service_1351ksj','template_4xo7wwr','#contact-form','edIjj3TyYnilJu2o7')
        .then(() =>{

            //show sent message
            contactMessage.textContent = 'Message Sent Successfully '

            //Remove message after five seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            //clear input fields
            contactForm.reset()
        })
}

contactForm.addEventListener('submit', sendEmail)

//Scroll up

const scrollUp = () =>{
    const scrollUp = document.getElementById('show-scroll')
    //when the scroll is higher than 350
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollUp)


//scroll Section active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
    sectionsClass.classList.add('active-link')
}else{
    sectionsClass.classList.remove('active-link')
}
    })
}

//scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

scrollActive.reveal(`.home__data`)

