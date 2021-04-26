const url = "https://larsingeprojects.one/gamehub/wp-json/wc/store/products";

async function blogList() {
    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results);
    }
    catch(error) {
        console.log(error);
    }
}