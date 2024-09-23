const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo');
let logospan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
       logospan.forEach((span, index) =>{
        setTimeout(() => {
           span.classList.add('active');

        }, (index + 1) * 100);
       }); 

       setTimeout(() => {
        logospan.forEach((span, index) =>{
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade'); 
            }, (span + 1) * 50);
        });
       }, 2000);

       setTimeout(() => {
        intro.style.top = '-100vh';
       }, 2300);

    });
});

function firstPageAnimation(){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: .3,
        ease: Expo.easeInOut
    })

        .to(".boundingelm",{
            y: 0,
            ease: Expo.easeInout,
            duration: 2,
            delay: -1,
            stagger: .2
        })

        .from("#herofooter",{
            y: -10,
            opacity: 0,
            duration: 0,
            ease: Expo.easeInOut
        })
}


function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

circleMouseFollower();
firstPageAnimation();


document.querySelectorAll(".elem").forEach(function (elem){
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(details){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration: 0.5
        });
    });

    elem.addEventListener("mousemove", function(details){
        var diff = details.clientY - elem.getBoundingClientRect().top;
        diffrot = rotate - details.clientX;
        rotate = details.clientX;

        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5)
        });
    });
});