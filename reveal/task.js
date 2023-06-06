reveals = Array.from(document.querySelectorAll('.reveal'))

reveals.forEach(element => {
    window.addEventListener('scroll', () => {
        const {top, bottom} = element.getBoundingClientRect()
        if (bottom <= window.innerHeight && top >= 0) element.className = 'reveal reveal_active'
        else  element.className = 'reveal'
    })
});