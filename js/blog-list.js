const blogContainer = document.querySelector(".blog-container");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const selectCategory = document.querySelector(".content select");

const apiUrl = "https://larsingeprojects.one/guitarrr/wp-json/wp/v2/";

/* Fetching blogs from API */
async function blogList(url) {
    try {
        const response = await fetch(url + `posts?per_page=10&_embed`);
        const results = await response.json();
        console.log(results);

        blogContainer.innerHTML = "";

        var n = 0;
        
        for(let i = 0; i < 10; i++) {

        n += 1;

        singleBlog(results[i],n);

        }
        blogContainer.innerHTML += `<button class="more-posts">Show more blog posts>></button>`

        const morePosts = document.querySelector(".more-posts");

        morePosts.onclick = async function addPosts() {
   

                try {
                    const response = await fetch(apiUrl + `posts?per_page=2&offset=${n}&_embed`);
                    const results = await response.json();
                    
                    morePosts.style.display = "none";

                    for(let i = 0; i < 2; i++) {
            
                    n += 1;

                    singleBlog(results[i],n);

                    }
                } catch(error) {
                    console.log(error);
                    blogContainer.innerHTML += showError("Something went wrong.");
                }    
                }
    }
    catch(error) {
        console.log(error);
        blogContainer.innerHTML = showError("Something went wrong.");
    }
}

blogList(apiUrl);

/* single blog functionality */
function singleBlog(results,n) {

    const formatDate = new Date(results.date).toLocaleString("en-GB", {
                                    day: "numeric",
                                    month: "numeric",
                                    year: "numeric",

                    });
    

    blogContainer.innerHTML += `<div class="blocks">
                                    <a href="blog-post-specific.html?id=${results.id}"><div class="image-container"><img src="${results._embedded['wp:featuredmedia']['0'].source_url}" class="image"></div>
                                    <div class="numbertext"> ${n}/ 12</div>
                                    <h2 class="left">${results.title.rendered}</h2>
                                    <p class="left">${results._embedded['wp:term']['0']['0'].name}</p>
                                    <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                    <p class="right author">${results._embedded.author[0].name}</p>
                                    <p class="left">${results.excerpt.rendered}</p></a>
                                    </div>`
}



/* Filter Functionality */
function presentCategory(event) {

    if (event.target.value === "archive") {
        blogList(apiUrl);
        
    } if (event.target.value !== "archive") {

    
    const categoryInfo = `https://larsingeprojects.one/guitarrr/wp-json/wp/v2/categories?slug=${event.target.value}`;

    async function categoryList() {
        try {
            const responseId = await fetch(categoryInfo);
            const resultsId = await responseId.json();
            const categoryId = resultsId[0].id;
            

            const categoryPosts = `https://larsingeprojects.one/guitarrr/wp-json/wp/v2/posts?categories=${categoryId}&_embed`;
            const response = await fetch(categoryPosts);
            const results = await response.json();
        

            blogContainer.innerHTML = "";
            var n = 0;

            for(i = 0; i < results.length; i++) {

                n += 1;

                const formatDate = new Date(results[i].date).toLocaleString("en-GB", {
                            day: "numeric",
                            month: "numeric",
                            year: "numeric",

                });

                blogContainer.innerHTML += `<div class="blocks">
                                <a href="blog-post-specific.html?id=${results[i].id}"><img src="${results[i]._embedded['wp:featuredmedia']['0'].source_url}" class="image">
                                <div class="numbertext">${n} / ${results.length}</div>
                                <h2 class="left">${results[i].title.rendered}</h2>
                                <p class="left">${results[i]._embedded['wp:term']['0']['0'].name}</p>
                                <p class="right"><img src="images/clock.svg" alt="clock-icon" class="icon">${formatDate}</p>
                                <p class="right">${results[i]._embedded.author[0].name}</p>
                                <p class="left">${results[i].excerpt.rendered}</p></a>
                                </div>`
            }
        } catch(error) {
                        console.log(error);
                    }   
    }
        categoryList();
    }
}

selectCategory.addEventListener("change", presentCategory);
