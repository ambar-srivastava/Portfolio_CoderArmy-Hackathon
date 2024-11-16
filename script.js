var tl = gsap.timeline();

tl.from('.navitem',{
    stagger: .3,
    duration: 7,
    y:20,
    ease: 'Expo.easeInOut',
    opacity: 0
})

.from('#bar',{
    width: 0,
    duration: 1,
    ease:'Expo.easeInOut',
}, '-=2')

.from('.leftitem',{
    stagger: .3,
    duration: 2,
    y: 20,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=2')

.from('#right img',{
    duration: 2,
    scale: 1.05,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=2')
