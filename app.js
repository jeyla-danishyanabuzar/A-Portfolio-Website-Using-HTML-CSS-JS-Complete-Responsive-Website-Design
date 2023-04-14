window.addEventListener('scroll', e => {
    document.body.style.cssText = `==scrollTop: ${this.scrollY}px`
});

var options = {
    strings: ['Front-end Developer', 'UI Designer', 'Copywriter', 'SMM Manager'],
    typeSpeed: 100,
    backspeed: 100,
    loop: true
    

};

var typed = new Typed ('.typing', options);