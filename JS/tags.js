async function searchByGenre(genre){

    const main = document.getElementById('renderSearchBox')

    switch (genre){

        case 'Action': 
            genreID = 1;
            break;

        case 'Adult Cast':
            genreID = 50;
            break;
        
        case 'Adventure':
            genreID = 2;
            break;

        case 'Anthropomorphic':
            genreID = 51;
            break; 

        case 'Avant Garde':
            genreID = 5;
            break; 

        case 'Award Winning':
            genreID = 46;
            break; 

        case 'CGDCT':
            genreID = 52;
            break; 

        case 'Childcare':
            genreID = 53;
            break; 

        case 'Combat Sports':
            genreID = 54;
            break; 

        case 'Comedy':
            genreID = 4;
            break; 

        case 'Delinquents':
            genreID = 55;
            break; 

        case 'Detective':
            genreID = 39;
            break; 

        case 'Drama':
            genreID = 8;
            break; 

        case 'Educational':
            genreID = 56;
            break; 

        case 'Fantasy':
            genreID = 10;
            break; 

        case 'Gag Humor':
            genreID = 57;
            break; 

        case 'Gore':
            genreID = 58;
            break; 

        case 'Gourmet':
            genreID = 47;
            break; 

        case 'Harem':
            genreID = 35;
            break; 

        case 'High Stakes Game':
            genreID = 59;
            break; 

        case 'Historical':
            genreID = 13;
            break; 

        case 'Horror':
            genreID = 14;
            break; 

        case 'Idols Female':
            genreID = 60;
            break; 

        case 'Idols Male':
            genreID = 61;
            break; 

        case 'Isekai':
            genreID = 62;
            break; 

        case 'Iyashikei':
            genreID = 63;
            break; 

        case 'Love Polygon':
            genreID = 64;
            break; 

        case 'Mahou Shoujo':
            genreID = 66;
            break; 

        case 'Martial Arts':
            genreID = 17;
            break; 

        case 'Mecha':
            genreID = 18;
            break; 

        case 'Medical':
            genreID = 67;
            break; 

        case 'Military':
            genreID = 38;
            break; 

        case 'Music':
            genreID = 19;
            break; 

        case 'Mystery':
            genreID = 7;
            break; 

        case 'Mythology':
            genreID = 6;
            break; 

        case 'Organized Crime':
            genreID = 68;
            break; 

        case 'Otaku Culture':
            genreID = 69;
            break; 

        case 'Parody':
            genreID = 20;
            break; 

        case 'Performing Arts':
            genreID = 70;
            break; 

        case 'Pets':
            genreID = 71;
            break; 

        case 'Psychological':
            genreID = 40;
            break; 

        case 'Racing':
            genreID = 3;
            break; 

        case 'Reincarnation':
            genreID = 72;
            break; 

        case 'Reverse Harem':
            genreID = 73;
            break; 

        case 'Romance':
            genreID = 22;
            break; 

        case 'Romantic Subtext':
            genreID = 74;
            break; 

        case 'Samurai':
            genreID = 21;
            break; 

        case 'School':
            genreID = 23;
            break; 

        case 'Sci-Fi':
            genreID = 24;
            break; 

        case 'Showbiz':
            genreID = 75;
            break; 

        case 'Slice of Life':
            genreID = 36;
            break; 
        
        case 'Space':
            genreID = 29;
            break; 

        case 'Strategy Game':
            genreID = 11;
            break; 

        case 'Super Power':
            genreID = 31;
            break; 

        case 'Supernatural':
            genreID = 37;
            break; 

        case 'Survival':
            genreID = 76;
            break; 

        case 'Suspense':
            genreID = 41;
            break; 

        case 'Team Sports':
            genreID = 77;
            break; 

        case 'Time Travel':
            genreID = 78;
            break; 

        case 'Vampire':
            genreID = 32;
            break; 

        case 'Video Game':
            genreID = 79;
            break; 

        case 'Visual Arts':
            genreID = 80;
            break; 

        case 'Workplace':
            genreID = 48;
            break; 

        case 'Boys Love':
            genreID = 28;
            break; 

        case 'Crossdressing':
            genreID = 81;
            break; 

        case 'Ecchi':
            genreID = 9;
            break; 

        case 'Erotica':
            genreID = 49;
            break; 

        case 'Girls Love':
            genreID = 26;
            break; 

        case 'Hentai':
            genreID = 12;
            break; 

        case 'Magical Sex Shift':
            genreID = 65;
            break; 
    }

    pagination = 1
    searchData = []
    
        for(var i = 0; i < 3; i++){
            const results = await fetch(`https://api.jikan.moe/v4/anime?page=${pagination}&genres=${genreID}`)
            .then(response => response.json())  
            .then(data => {
                searchData.push(data.data)
                })             
            pagination += 1;
        }

        combineArrays(searchData)

}
