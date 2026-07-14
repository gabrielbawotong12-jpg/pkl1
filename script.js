/* ===========================
   MENU HAMBURGER
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


/* ===========================
   TUTUP MENU SAAT LINK DIKLIK
=========================== */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


/* ===========================
   NAVBAR SCROLL EFFECT
=========================== */

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "rgba(255,255,255,0.95)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    }else{

        navbar.style.background = "rgba(255,255,255,.45)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }

});


/* ===========================
   FADE IN SAAT SCROLL
=========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{threshold:0.2});


const hiddenElements = document.querySelectorAll(
".card,.about-card,.contact-card"
);

hiddenElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition="all .8s ease";

    observer.observe(el);

});


/* ===========================
   HERO TEXT ANIMATION
=========================== */

window.addEventListener("load",()=>{

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";
    hero.style.transition = "1.2s";

    setTimeout(()=>{

        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";

    },300);

});


/* ===========================
   BUTTON RIPPLE EFFECT
=========================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const diameter=Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = circle.style.height = diameter+"px";

        circle.style.left =
        e.clientX -
        this.getBoundingClientRect().left -
        diameter/2 +"px";

        circle.style.top =
        e.clientY -
        this.getBoundingClientRect().top -
        diameter/2 +"px";

        circle.classList.add("ripple");

        const ripple=this.getElementsByClassName("ripple")[0];

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

console.log("Website PKL DI TRUFARM berhasil dimuat.");