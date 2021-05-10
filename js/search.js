const search = document.querySelector(".search");
const searchInput = document.querySelector(".search-container input");
const searchContainer = document.querySelector(".search-container form");
const faSearch = document.querySelector(".fa-search");

search.onclick = function searchBar(event) {

    if ( searchInput.style.display === "") {
        event.preventDefault();
        searchInput.style.display = "block";
    } if (searchInput.style.display === "block") {

        searchContainer.action = "/action_page.php";
    }
   /* window.onclick = function (event) {
    event.preventDefault();
    if (event.target !== faSearch && event.target !== searchInput) {
        console.log("hehe");
        searchInput.style.display = "none";
    }
    
    console.log(event.target)*/

}

