rotator = document.querySelectorAll('.rotator__case')
let i = 0
const startRotating = speed =>    
    setTimeout(() => {
        rotator[i % rotator.length].classList.toggle('rotator__case_active')
        rotator[(i + 1) % rotator.length].classList.toggle('rotator__case_active')
        rotator[(i + 1) % rotator.length].style.color = rotator[(i) % rotator.length].getAttribute('data-color')
        i++
        startRotating(rotator[(i) % rotator.length].getAttribute('data-speed'))
    }, speed)

startRotating(rotator[(i) % rotator.length].getAttribute('data-speed'))
