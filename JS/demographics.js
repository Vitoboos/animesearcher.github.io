async function searchByGenre(genre){

    const main = document.getElementById('renderSearchBox')

    switch (genre){

        case 'Josei': 
            genreID = 43;
            break;

        case 'Kodomo':
            genreID = 15;
            break;
        
        case 'Seinen':
            genreID = 42;
            break;

        case 'Shoujo':
            genreID = 25;
            break; 

        case 'Shounen':
            genreID = 27;
            break; 
    }

    pagination = 1
    searchData = []
    
        for(var i = 0; i < 3; i++){
            const results = await fetch(`https://api.jikan.moe/v4/anime?page=${pagination}&genres=${genreID}`)
            .then(response => response.json())  
            .then(data => {
                searchData.push(data.data)
                console.log('TEST')
                })             
            pagination += 1;
        }

        combineArrays(searchData)


}
