async function searchByTitle(){

    let title = document.getElementById('search').value
    let searchData = []

    const requestAnime = await fetch("https://api.jikan.moe/v4/anime?q="+title)
        .then(response => response.json())  
        .then(data => {
            console.log(data.pagination)
            searchData = data.data
        });

        renderList(searchData)
}


