const url = "https://larsingeprojects.one/guitarrr/wp-json/wc/v3/products?consumer_key=ck_1ed6953e7f13254a2789044c94bcbfb3c487803b&consumer_secret=cs_a9ec019056d7323f7e06dacbcd741cb8962864cf";
const morePosts = document.querySelector(".more-posts");

const blogContainer = document.querySelector(".blog-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

async function blogList() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        for(let i = 0; i < 9; i++) {

        

        blogContainer.innerHTML += `<div class="blocks">
                                <a href="index.html">
                                <img src="${results[i].images[0].src}" class="image">
                                <div class="numbertext">${i + 1} / 9</div>
                                <h2 class="left">${results[i].name}</h2>
                                <p class="left">${results[i].categories[0].name}</p>
                                <p class="right">${results[i].attributes[0].options}</p>
                                <p class="right">${results[i].attributes[1].options}</p>
                                <p class="left">${results[i].description}</p>
                                </a>
                            </div>
                            `
}
}
    catch(error) {
        console.log(error);
    }
}


blogList();



function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".mySlides");

 console.log(slides);
 console.log(slides.length);

 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 console.log(n);
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

console.log(slides[slideIndex-1]);
slides[slideIndex-1].style.display = "block";

}

var n = 10;

morePosts.onclick = async function addPosts() {
    console.log("hello");

    console.log(event);

     try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);

        for(let i = 0; i < 3; i++) {

        blogContainer.innerHTML += `<div class="blocks">
                                <img src="${results[i].images[0].src}" class="image">
                                <div class="numbertext">${i + 1} / 9</div>
                                <h2 class="left">${results[i].name}</h2>
                                <p class="left">${results[i].categories[0].name}</p>
                                <p class="right">${results[i].attributes[0].options}</p>
                                <p class="right">${results[i].attributes[1].options}</p>
                                <p class="left">${results[i].description}</p>
                            </div>
                            `
    n = n + 1;
    console.log(n);
        }
    } catch(error) {
        console.log(error);
    }    
}


    
  

/*morePosts.addEventListener("click", addPosts());*/