const fadeOne = document.querySelector(".fade1");
const fadeTwo = document.querySelector(".fade2");
const fadeThree = document.querySelector(".fade3");
const fadeFour = document.querySelector(".fade4");
const slideShowContainer = document.querySelector(".slideshow-container");
const mobileContainer = document.querySelector(".slideshow-mobile-container");
const mobileSlides = document.querySelectorAll(".mobileSlides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const prevMobile = document.querySelector(".prev-mobile");
const nextMobile = document.querySelector(".next-mobile");
const slides = document.querySelectorAll(".mySlides");

var dots = document.querySelectorAll(".dot-container .dot");
var mobileDots = document.querySelectorAll(".dot-container-mobile .dot");

const apiUrl =
    "https://larsingeprojects.one/guitarrr/wp-json/wp/v2/";

async function blogList(url) {
    try {
        const response = await fetch(url + `posts?per_page=12&_embed`);
        const results = await response.json();
        console.log(results);

        slides[0].innerHTML = "";

                    for(let i = 0; i < 3; i++) {
                        individualCarouselPosts(results[i],slides[0]);
                    }
    
                    for(let i = 3; i < 6; i++) {
                        individualCarouselPosts(results[i],slides[0]);
                    }

                    for(let i = 6; i < 9; i++) {
                        individualCarouselPosts(results[i],slides[0]);
                           
                    }

                    for(let i = 9; i < 12; i++) {
                        individualCarouselPosts(results[i],slides[0]);
                    }
                                    
        mobileSlides[0].innerHTML = "";

        

        for(let i = 0; i < 12; i++) {

            individualCarouselPosts(results[i],mobileSlides[i],"blocks-mobile");

        }
            
    }
    catch(error) {
        console.log(error);
    }
}

blogList(apiUrl);


/* single post functionality */
function individualCarouselPosts(results,container,extraClass) {
                            
                            const formatDate = new Date(results.date).toLocaleString("en-GB", {
                                            day: "numeric",
                                            month: "numeric",
                                            year: "numeric",

                            });

                            container.innerHTML += `<div class="blocks ${extraClass}">
                                                    <a href="blog-post-specific.html?id=${results.id}"><img src="${results._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                                    <div class="numbertext">${results._embedded['wp:term']['0']['0'].name}</div>
                                                    <h2 class="left post-header">${results.title.rendered}</h2>
                                                    <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                                    <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results._embedded.author[0].name}</p>
                                                    </a>
                                                    </div>`

                    }

console.log(slideShowContainer);


var slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
    
    var i;
    var slides = document.querySelectorAll(".mySlides");
    
    
    var slideLength = slides.length;
    var dotLength = dots.length;

    console.log(slideLength);

 console.log(slides);
 console.log(slideLength);

 if (n > slideLength) {slideIndex = 1}
 if (n < 1) {slideIndex = slideLength}
 console.log(n);
for (i = 0; i < slideLength; i++) {
    slides[i].style.display = "none";
}

for (i = 0; i < dotLength; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
}

console.log(slides[slideIndex-1]);
dots[slideIndex-1].className += " active-dot";
slides[slideIndex-1].style.display = "block";
}

dots.forEach(function(dot, number) {   
                dot.onclick = function() {showSlides(slideIndex = number + 1);}
                  });

                  
/* mobile function */
var slideIndexMobile = 1;
showSlidesMobile(slideIndexMobile);

function showSlidesMobile(m) {

    var lengthy = 12;
    var dotLength = mobileDots.length;

    if (m > lengthy) {slideIndexMobile = 1}
    if (m < 1) {slideIndexMobile = lengthy}
    console.log(m);
 
    for (i = 0; i < lengthy; i++) {
    mobileSlides[i].style.display = "none";
}

for (i = 0; i < dotLength; i++) {
    mobileDots[i].className = mobileDots[i].className.replace(" active-dot", "");
}

    mobileDots[slideIndexMobile-1].className += " active-dot";
    mobileSlides[slideIndexMobile-1].style.display = "block";
}

mobileDots.forEach(function(dot, number) {   
                dot.onclick = function() {showSlidesMobile(slideIndexMobile = number + 1);}
                  });


/* prev/next functionality */

prev.addEventListener("click", function() {showSlides(slideIndex -= 1);});
next.addEventListener("click", function() {showSlides(slideIndex += 1);});
prevMobile.addEventListener("click", function() {showSlidesMobile(slideIndexMobile -= 1)});
nextMobile.addEventListener("click", function() {showSlidesMobile(slideIndexMobile += 1)});

const slideShowContainer = document.querySelector(".slideshow-container");
const mobileContainer = document.querySelector(".slideshow-mobile-container");
const mobileSlides = document.querySelectorAll(".mobileSlides");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const prevMobile = document.querySelector(".prev-mobile");
const nextMobile = document.querySelector(".next-mobile");
const slides = document.querySelectorAll(".mySlides");

const dots = document.querySelectorAll(".dot-container .dot");
const mobileDots = document.querySelectorAll(".dot-container-mobile .dot");

const apiUrl =
    "https://larsingeprojects.one/guitarrr/wp-json/wp/v2/";

async function blogList(url) {
    try {
        const response = await fetch(url + `posts?per_page=12&_embed`);
        const results = await response.json();
        console.log(results);

        /* Desktop presentation */
        slides[0].innerHTML = "";

                    for(let i = 0; i < 3; i++) {
                        individualCarouselPosts(results[i],slides[0]);
                    }
    
                    for(let i = 3; i < 6; i++) {
                        individualCarouselPosts(results[i],slides[1]);
                    }

                    for(let i = 6; i < 9; i++) {
                        individualCarouselPosts(results[i],slides[2]);
                           
                    }

                    for(let i = 9; i < 12; i++) {
                        individualCarouselPosts(results[i],slides[3]);
                    }
             
        /* mobile presentation */
        mobileSlides[0].innerHTML = "";

        for(let i = 0; i < 12; i++) {

            individualCarouselPosts(results[i],mobileSlides[i],"blocks-mobile");
        }
            
    }
    catch(error) {
        console.log(error);
    }
}

blogList(apiUrl);

/* single post functionality */
function individualCarouselPosts(results,container,extraClass) {
                            
                            const formatDate = new Date(results.date).toLocaleString("en-GB", {
                                            day: "numeric",
                                            month: "numeric",
                                            year: "numeric",

                            });

                            container.innerHTML += `<div class="blocks ${extraClass}">
                                                    <a href="blog-post-specific.html?id=${results.id}"><img src="${results._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                                    <div class="numbertext">${results._embedded['wp:term']['0']['0'].name}</div>
                                                    <h2 class="left post-header">${results.title.rendered}</h2>
                                                    <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                                    <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results._embedded.author[0].name}</p>
                                                    </a>
                                                    </div>`

                    }

/* desktop click function */
var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {

    carouselGeneral(n,slides,dots,slideIndex);

}

dots.forEach(function(dot, number) {   
                dot.onclick = function() {showSlides(slideIndex = number + 1);}
                  });


/* mobile click function */
var slideIndexMobile = 1;
showSlidesMobile(slideIndexMobile);
                  
function showSlidesMobile(n) {

    carouselGeneral(n,mobileSlides,mobileDots,slideIndexMobile)
};

mobileDots.forEach(function(dot, number) {   
                dot.onclick = function() {showSlidesMobile(slideIndexMobile = number + 1);}
                  });

/* General click function */
function carouselGeneral(n,slideType,dotType,indexType) {
    
    var slideLength = slideType.length;
    var dotLength = dotType.length;


    if (n > slideLength) {indexType = 1}
    if (n < 1) {indexType = slideLength}

    for (i = 0; i < slideLength; i++) {
            slideType[i].style.display = "none";
    }

    for (i = 0; i < dotLength; i++) {
        dotType[i].className = dotType[i].className.replace(" active-dot", "");
    }

dotType[indexType-1].className += " active-dot";
slideType[indexType-1].style.display = "block";
}

/* prev/next functionality */
prev.addEventListener("click", function() {showSlides(slideIndex -= 1);});
next.addEventListener("click", function() {showSlides(slideIndex += 1);});
prevMobile.addEventListener("click", function() {showSlidesMobile(slideIndexMobile -= 1)});
nextMobile.addEventListener("click", function() {showSlidesMobile(slideIndexMobile += 1)});