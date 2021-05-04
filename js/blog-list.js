const morePosts = document.querySelector(".more-posts");
const blogContainer = document.querySelector(".blog-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const apiUrl = "https://larsingeprojects.one/guitarrr/wp-json/wp/v2/";

async function blogList(url) {
    try {
        const response = await fetch(url + `posts?per_page=10&_embed`);
        const results = await response.json();
        console.log(results);

        var n = 0;

        for(let i = 0; i < 10; i++) {

        n += 1;

        blogContainer.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${n} / 12</div>
                                <h2 class="left">${results[i].title.rendered}</h2>
                                <p class="left">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right">${results[i].date}</p>
                                <p class="right">${results[i]._embedded.author[0].name}</p>
                                <p class="left">${results[i].excerpt.rendered}</p></a>
                                </div>`
}
}
    catch(error) {
        console.log(error);
    }
}

blogList(apiUrl);

/*function showSlides(n) {
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

}*/

var n = 10;


morePosts.onclick = async function addPosts() {
   

     try {
        const response = await fetch(apiUrl + `posts?per_page=2&offset=${n}&_embed`);
        const results = await response.json();
        console.log(results);

        for(let i = 0; i < 3; i++) {

        n = n + 1;

        blogContainer.innerHTML += `<div class="blocks">
                                <a href="index.html"><img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${n} / 12</div>
                                <h2 class="left">${results[i].title.rendered}</h2>
                                <p class="left">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right">${results[i].date}</p>
                                <p class="right">${results[i]._embedded.author[0].name}</p>
                                <p class="left">${results[i].excerpt.rendered}</p></a>
                                </div>`
    
    console.log(n);
        }
    } catch(error) {
        console.log(error);
    }    
}

/*morePosts.addEventListener("click", addPosts());*/