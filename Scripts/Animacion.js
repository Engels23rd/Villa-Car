const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    delay: 300,
    reset: true
})

sr.reveal('.title-home')
sr.reveal('.title-about')
sr.reveal('.title-popular')
sr.reveal('.F-portada', {delay: 500})
sr.reveal('.txt-home', {delay: 650})
sr.reveal('.start-home', {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal('.start-about', {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal('.start-popular', {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal('.F-about', {delay: 1000,origin: 'left'})
sr.reveal('.txt-about', {delay: 800, origin: 'right'})
sr.reveal('.txt-popular', {delay: 800, origin: 'left'})

