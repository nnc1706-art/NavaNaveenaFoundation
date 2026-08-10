// ==========================
// Sticky Navbar
// ==========================

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
    } else {
        header.style.background = "#ffffff";
        header.style.boxShadow = "none";
    }
});


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// ==========================
// Counter Animation
// ==========================

const counters = document.querySelectorAll(".impact-box h2");

const speed = 200;

const counterObserver = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const update = ()=>{

const target = Number(counter.innerText.replace(/\D/g,''));

const count = Number(counter.getAttribute("data-count")) || 0;

const increment = Math.ceil(target/speed);

if(count<target){

counter.setAttribute("data-count",count+increment);

counter.innerText=(count+increment)+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


// ==========================
// Fade Animation
// ==========================

const hiddenElements = document.querySelectorAll(
".program-card,.objective-card,.mv-card,.event-card,.impact-box,.info-box"
);

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.15
});

hiddenElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition=".7s ease";

observer.observe(el);

});


// ==========================
// Gallery Hover
// ==========================

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});


// ==========================
// Mobile Hamburger Menu
// ==========================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

}