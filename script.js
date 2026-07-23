/*==============================
SMOOTH SCROLL
==============================*/

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click', function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

target.scrollIntoView({

behavior:'smooth'

});

});

});

/*==============================
HEADER SCROLL EFFECT
==============================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,0.95)";
header.style.padding="14px 8%";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}else{

header.style.background="rgba(0,0,0,.75)";
header.style.padding="18px 8%";
header.style.boxShadow="none";

}

});

/*==============================
SCROLL REVEAL
==============================*/

const reveals=document.querySelectorAll(

".service-card,.portfolio-card,.stat-box,.testimonial-card,.contact-card,.about-image,.about-content"

);

function reveal(){

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/*==============================
COUNTER ANIMATION
==============================*/

const counters=document.querySelectorAll(".stat-box h2");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector("#stats");

if(!stats) return;

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight && !started){

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

});

}

});

/*==============================
BACK TO TOP BUTTON
==============================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*==============================
ACTIVE NAVIGATION
==============================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*==============================
PORTFOLIO IMAGE HOVER
==============================*/

document.querySelectorAll(".portfolio-card img").forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.92)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.cursor="zoom-out";
overlay.style.zIndex="99999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="15px";

overlay.appendChild(image);

document.body.appendChild(overlay);

overlay.onclick=()=>{

overlay.remove();

};

});

});

/*==============================
LOADING FINISHED
==============================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
const glow=document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector("nav");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});
// =========================
// PREMIUM MOBILE MENU
// =========================

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const mobileLinks = document.querySelectorAll(".mobile-nav a");

// Open Menu
menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = "hidden";
});

// Close Menu
closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
});

// Close menu after clicking a link
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});

// Close menu with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});
