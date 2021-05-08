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
const slides = document.querySelectorAll("mySlides");


const apiUrl =
    "https://larsingeprojects.one/guitarrr/wp-json/wp/v2/";



const buttonPrevious = document.querySelector("#button-previous");
const buttonNext = document.querySelector("#button-next");



async function blogList(url) {
    try {
        const response = await fetch(url + `posts?per_page=12&_embed`);
        const results = await response.json();
        console.log(results);

        fadeOne.innerHTML = "";

        for(let i = 0; i < 3; i++) {

            const formatDate = new Date(results[i].date).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",

        });

        fadeOne.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 1} / 12</div>
                                <h2 class="left">${results[i].title.rendered}</h2>
                                <p class="left">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i]._embedded.author[0].name}</p></a>
                                </div>`
                            

        fadeTwo.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i + 3]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 4} / 12</div>
                                <h2 class="left">${results[i + 3].title.rendered}</h2>
                                <p class="left">${results[i + 3]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i + 3]._embedded.author[0].name}</p></a>
                                </div>`
                            

        fadeThree.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i + 6]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 7} / 12</div>
                                <h2 class="left">${results[i + 6].title.rendered}</h2>
                                <p class="left">${results[i + 6]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i + 6]._embedded.author[0].name}</p></a>
                                </div>`

        fadeFour.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i + 9]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${i + 10} / 12</div>
                                <h2 class="left">${results[i + 9].title.rendered}</h2>
                                <p class="left">${results[i + 9]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i + 9]._embedded.author[0].name}</p></a>
                                </div>`

        

    }

        for(let i = 0; i < 12; i++) {

            const formatDate = new Date(results[i].date).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",

        });
                mobileSlides[i].innerHTML += `<div class="blocks blocks-mobile">
                                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                                <div class="numbertext">${i + 1} / 12</div>
                                                <h2 class="left">${results[i].title.rendered}</h2>
                                                <p class="left">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i]._embedded.author[0].name}</p></a>
                                                </div>
                                                    `
            
            }
            
}
    catch(error) {
        console.log(error);
    }
}

blogList(apiUrl);

console.log(slideShowContainer);

var slideIndex = 1;
showSlides(slideIndex);


function showSlides(n) {
    
    var i;
    var slides = document.querySelectorAll(".mySlides");
    
    var length = slides.length;

    console.log(length);

 console.log(slides);
 console.log(length);

 if (n > length) {slideIndex = 1}
 if (n < 1) {slideIndex = length}
 console.log(n);
for (i = 0; i < length; i++) {
    slides[i].style.display = "none";
}

console.log(slides[slideIndex-1]);
slides[slideIndex-1].style.display = "block";

}

/* mobile function */

var slideIndexMobile = 1;
showSlidesMobile(slideIndexMobile);

function showSlidesMobile(m) {

    var lengthy = 12;

    if (m > lengthy) {slideIndexMobile = 1}
    if (m < 1) {slideIndexMobile = lengthy}
    console.log(m);
    for (i = 0; i < lengthy; i++) {
    mobileSlides[i].style.display = "none";
}

    for (i = 0; i < lengthy; i++) {
    mobileSlides[i].style.display = "none";
}
    mobileSlides[slideIndexMobile-1].style.display = "block";
    console.log(mobileContainer.length);
    console.log(mobileSlides.length);
}



/* prev/next functionality */

prev.addEventListener("click", function() {showSlides(slideIndex -= 1);});
next.addEventListener("click", function() {showSlides(slideIndex += 1);});
/*prevMobile.addEventListener("click", function() {showSlidesMobile(slideIndexMobile -= 1);});*/
/*nextMobile.addEventListener("click", function() {showSlidesMobile(slideIndexMobile += 1);});*/



