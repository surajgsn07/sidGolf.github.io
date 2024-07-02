
var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x + - 200 +"px";
    blur.style.top = dets.y + - 200 +  "px";
})
var blur = document.querySelector("#cursor-blur");
const my;

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener('mouseenter',()=>{
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener('mouseleave',()=>{
        crsr.style.scale = 1
        crsr.style.border = "0px solid #c0ff13"
        crsr.style.backgroundColor = "#c0ff13"
    })
})



gsap.to("#nav" , {
    backgroundColor : "black",
    height:"80px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start : "top -10%",
        end:"top -11%",
        scrub : 1
    }
})

gsap.to("#main" , {
    backgroundColor : "black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start :"top -30%",
        end:"top -80%",
        scrub:2
    }
})

gsap.from("#about-us img , #about-us-in" , {
    y:90,
    opacity:0,
    duration :1,
    // stagger : 0.4,
    scrollTrigger:{
        trigger :"#about-us",
        scroller:"body",
        start :"top 70%",
        end : "top 65%",
        // markers:true,
        scrub:1
    }
})


gsap.from(".card" , {
    scale : 0.8,
    opacity:0,
    duration :1,
    // stagger : 0.4,
    scrollTrigger:{
        trigger :"#about-us",
        scroller:"body",
        start :"top 50%",
        end : "top 30%",
        // markers:true,
        scrub:0.4
    }
})


gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start :"top 80%",
        end:"top 50%",
        scrub:2,
        // markers:true

    }
})

gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start :"top 80%",
        end:"top 50%",
        scrub:2,
        // markers:true

    }
})

gsap.from("#page4 h1" , {
    y:40,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroll:"body",
        start :"top 75%",
        end:"top 70%",
        scrub:1,
        // markers:true
    }
})
