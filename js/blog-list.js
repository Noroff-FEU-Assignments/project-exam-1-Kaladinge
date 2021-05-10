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

        blogContainer.innerHTML = "";

        var n = 0;

        console.log(results[0].date)
        /*console.log(results[0]._embedded.author[0].name[2]);*/

        for(let i = 0; i < 10; i++) {

        n += 1;

        const formatDate = new Date(results[i].date).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",

        });

        console.log(formatDate);

        blogContainer.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image" alt="${results[i]._embedded['wp:featuredmedia']['0'].alt_text}">
                                <div class="numbertext">${n} / 12</div>
                                <h2 class="left">${results[i].title.rendered}</h2>
                                <p class="left category">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right author"><img src="images/person.svg" alt="person-icon" class="icon">${results[i]._embedded.author[0].name}</p></a>
                                <p class="left">${results[i].excerpt.rendered}</p></a>
                                </div>`
        }
        blogContainer.innerHTML += `<button class="more-posts">Show more blog posts>></button>`

        const morePosts = document.querySelector(".more-posts");

        var n = 10;

        morePosts.onclick = async function addPosts() {
   

     try {
        const response = await fetch(apiUrl + `posts?per_page=2&offset=${n}&_embed`);
        const results = await response.json();
        console.log(results);


        morePosts.style.display = "none";

        for(let i = 0; i < 3; i++) {

        const formatDate = new Date(results[i].date).toLocaleString("en-GB", {
                        day: "numeric",
                        month: "numeric",
                        year: "numeric",

        });
            
        n = n + 1;

        blogContainer.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${n} / 12</div>
                                <h2 class="left">${results[i].title.rendered}</h2>
                                <p class="left">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right">${results[i]._embedded.author[0].name}</p>
                                <p class="left">${results[i].excerpt.rendered}</p></a>
                                </div>`
    
    console.log(n);
        }
    } catch(error) {
        console.log(error);
    }    
}
}
    catch(error) {
        console.log(error);
    }
}

blogList(apiUrl);


/*var n = 10;

morePosts.onclick = async function addPosts() {
   

     try {
        const response = await fetch(apiUrl + `posts?per_page=2&offset=${n}&_embed`);
        const results = await response.json();
        console.log(results);

        for(let i = 0; i < 3; i++) {

        n = n + 1;

        blogContainer.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${n} / 12</div>
                                <h2 class="left">${results[i].title.rendered}</h2>
                                <p class="left">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right">${results[i]._embedded.author[0].name}</p>
                                <p class="left">${results[i].excerpt.rendered}</p></a>
                                </div>`
    
    console.log(n);
        }
    } catch(error) {
        console.log(error);
    }    
}*/

/*morePosts.addEventListener("click", addPosts());*/