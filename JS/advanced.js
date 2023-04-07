function setTagID(genre){

    switch (genre){

        case 'Action': 
            genre = 1;
            break;
    
        case 'Adult Cast':
            genre = 50;
            break;
        
        case 'Adventure':
            genre = 2;
            break;
    
        case 'Anthropomorphic':
            genre = 51;
            break; 
    
        case 'Avant Garde':
            genre = 5;
            break; 
    
        case 'Award Winning':
            genre = 46;
            break; 
    
        case 'CGDCT':
            genre = 52;
            break; 
    
        case 'Childcare':
            genre = 53;
            break; 
    
        case 'Combat Sports':
            genre = 54;
            break; 
    
        case 'Comedy':
            genre = 4;
            break; 
    
        case 'Delinquents':
            genre = 55;
            break; 
    
        case 'Detective':
            genre = 39;
            break; 
    
        case 'Drama':
            genre = 8;
            break; 
    
        case 'Educational':
            genre = 56;
            break; 
    
        case 'Fantasy':
            genre = 10;
            break; 
    
        case 'Gag Humor':
            genre = 57;
            break; 
    
        case 'Gore':
            genre = 58;
            break; 
    
        case 'Gourmet':
            genre = 47;
            break; 
    
        case 'Harem':
            genre = 35;
            break; 
    
        case 'High Stakes Game':
            genre = 59;
            break; 
    
        case 'Historical':
            genre = 13;
            break; 
    
        case 'Horror':
            genre = 14;
            break; 
    
        case 'Idols Female':
            genre = 60;
            break; 
    
        case 'Idols Male':
            genre = 61;
            break; 
    
        case 'Isekai':
            genre = 62;
            break; 
    
        case 'Iyashikei':
            genre = 63;
            break; 
    
        case 'Love Polygon':
            genre = 64;
            break; 
    
        case 'Mahou Shoujo':
            genre = 66;
            break; 
    
        case 'Martial Arts':
            genre = 17;
            break; 
    
        case 'Mecha':
            genre = 18;
            break; 
    
        case 'Medical':
            genre = 67;
            break; 
    
        case 'Military':
            genre = 38;
            break; 
    
        case 'Music':
            genre = 19;
            break; 
    
        case 'Mystery':
            genre = 7;
            break; 
    
        case 'Mythology':
            genre = 6;
            break; 
    
        case 'Organized Crime':
            genre = 68;
            break; 
    
        case 'Otaku Culture':
            genre = 69;
            break; 
    
        case 'Parody':
            genre = 20;
            break; 
    
        case 'Performing Arts':
            genre = 70;
            break; 
    
        case 'Pets':
            genre = 71;
            break; 
    
        case 'Psychological':
            genre = 40;
            break; 
    
        case 'Racing':
            genre = 3;
            break; 
    
        case 'Reincarnation':
            genre = 72;
            break; 
    
        case 'Reverse Harem':
            genre = 73;
            break; 
    
        case 'Romance':
            genre = 22;
            break; 
    
        case 'Romantic Subtext':
            genre = 74;
            break; 
    
        case 'Samurai':
            genre = 21;
            break; 
    
        case 'School':
            genre = 23;
            break; 
    
        case 'Sci-Fi':
            genre = 24;
            break; 
    
        case 'Showbiz':
            genre = 75;
            break; 
    
        case 'Slice of Life':
            genre = 36;
            break; 
        
        case 'Space':
            genre = 29;
            break; 
    
        case 'Strategy Game':
            genre = 11;
            break; 
    
        case 'Super Power':
            genre = 31;
            break; 
    
        case 'Supernatural':
            genre = 37;
            break; 
    
        case 'Survival':
            genre = 76;
            break; 
    
        case 'Suspense':
            genre = 41;
            break; 
    
        case 'Team Sports':
            genre = 77;
            break; 
    
        case 'Time Travel':
            genre = 78;
            break; 
    
        case 'Vampire':
            genre = 32;
            break; 
    
        case 'Video Game':
            genre = 79;
            break; 
    
        case 'Visual Arts':
            genre = 80;
            break; 
    
        case 'Workplace':
            genre = 48;
            break; 
    
        case 'Boys Love':
            genre = 28;
            break; 
    
        case 'Crossdressing':
            genre = 81;
            break; 
    
        case 'Ecchi':
            genre = 9;
            break; 
    
        case 'Erotica':
            genre = 49;
            break; 
    
        case 'Girls Love':
            genre = 26;
            break; 
    
        case 'Hentai':
            genre = 12;
            break; 
    
        case 'Magical Sex Shift':
            genre = 65;
            break; 

        case 'Josei': 
            genre = 43;
            break;

        case 'Kodomo':
            genre = 15;
            break;
        
        case 'Seinen':
            genre = 42;
            break;

        case 'Shoujo':
            genre = 25;
            break; 

        case 'Shounen':
            genre = 27;
            break; 
    }

    return genre
}


function sfwSwitch(){
    let btnSwitch = document.getElementById('sfwSwitch')

    if(btnSwitch.innerText === 'YES'){
        btnSwitch.innerHTML = 'NO'
    }

    else{
        btnSwitch.innerHTML = 'YES'
    }
    
    btnSwitch.classList.toggle('active')

}

function getTags(){
    const tagsBox = document.getElementById('tagsBox')
    let tags = tagsBox.getElementsByClassName('tagCheck')
    let tagsToSearch = []
    let tagsID = []

    for(let i = 0; i < tags.length; i++){
        
        if(tags[i].checked == true){
            tagsToSearch.push(tags[i].value)
        }
    }

    for(var i = 0; i < tagsToSearch.length; i++){
        tagsID.push(setTagID(tagsToSearch[i]))
    }

    return tagsID
}

function getExplicitTags(){
    const tagsBox = document.getElementById('explicitTagsBox')
    let tags = tagsBox.getElementsByClassName('tagCheck')
    let tagsToSearch = []
    let tagsID = []

    for(let i = 0; i < tags.length; i++){
        
        if(tags[i].checked == true){
            tagsToSearch.push(tags[i].value)
        }
    }

    for(var i = 0; i < tagsToSearch.length; i++){
        tagsID.push(setTagID(tagsToSearch[i]))
    }

    return tagsID
}

function getDemographic(){   
    const tagsBox = document.getElementById('demographicsBox')
    let demographic = tagsBox.getElementsByClassName('demographicRadioBtn')
    let demographicToSearch = []
    let tagsID = ''

    for(var i = 0; i < demographic.length; i++){
        
        if(demographic[i].checked == true){
            demographicToSearch.push(demographic[i].value)
        }
    }

    tagsID = setTagID(demographicToSearch[0])

    if (tagsID == undefined){
        return []
    }

    return tagsID
}


function getMediaType(){   
    const mediaBox = document.getElementById('mediaTypeBox')
    let media = mediaBox.getElementsByClassName('mediaTypeRadioBtn')
    mediaToSearch = []

    for(let i = 0; i < media.length; i++){
        
        if(media[i].checked == true){
            mediaToSearch.push(media[i].value)
        }
    }

    if (mediaToSearch.length == 0){
        return ''
    }

    return mediaToSearch
}

async function getStudios(){
    const studios = document.getElementById('studioName')

    if (studios.value == ''){
        return ''
    }

    let searchData = 0;

    const requestStudio = await fetch(`https://api.jikan.moe/v4/producers?q=${studios.value}`)        
    .then(response => response.json())  
    .then(async data => {
        searchData = await data.data[0].mal_id 
    });

    return searchData
}

function getYear(){
    const seasonYear = document.getElementById("seasonYear")

    return seasonYear.value
}


async function advancedSearch(){

    SFWFILTER = document.getElementById('sfwSwitch').innerText
    let searchData = []

    tags = getTags();
    explicit = getExplicitTags();
    demographic = getDemographic();
    media = getMediaType();
    studio = await getStudios();
    year = getYear();

    console.log(studio)

    // Combining tags and explicit tags

    for(var i = 0; i < explicit.length; i++){
        tags.push(explicit[i])
    }

    for(var i = 0; i < demographic.length; i++){
        tags.push(demographic[i])
    }

    if (SFWFILTER === 'NO'){
        for(let i = 0; i < explicit.length; i++){
            tags.push(explicit[i])
        }    
    }

    searchData = ''

    if(media == '' && studio == '' && year == ''){
        const requestAnime = await fetch(`https://api.jikan.moe/v4/anime?genres=${tags}`)        
        .then(response => response.json())  
        .then(data => {
            searchData = data.data
        });
    
        return renderList(searchData)
    }

    else if(studio == '' && year == ''){
        const requestAnime = await fetch(`https://api.jikan.moe/v4/anime?genres=${tags}&type=${media}`)        
        .then(response => response.json())  
        .then(data => {
            searchData = data.data
        });
        return renderList(searchData)
    }

    else if(media == '' && year == ''){
        const requestAnime = await fetch(`https://api.jikan.moe/v4/anime?genres=${tags}&producers=${studio}`)        
        .then(response => response.json())  
        .then(data => {
            searchData = data.data
        });
        return renderList(searchData)
    }

    else if(media == '' && studio == ''){
        const requestAnime = await fetch(`https://api.jikan.moe/v4/anime?genres=${tags}&start_date=${year}`)        
        .then(response => response.json())  
        .then(data => {
            searchData = data.data
        });
        return renderList(searchData)
    }

    else if(media == ''){
        const requestAnime = await fetch(`https://api.jikan.moe/v4/anime?genres=${tags}&producers=${studio}&start_date=${year}`)        
        .then(response => response.json())  
        .then(data => {
            searchData = data.data
        });
        return renderList(searchData)
    }

    else if(studio == ''){
        const requestAnime = await fetch(`https://api.jikan.moe/v4/anime?genres=${tags}&type=${media}&start_date=${year}`)        
        .then(response => response.json())  
        .then(data => {
            searchData = data.data
        });
        return renderList(searchData)
    }

    else if(year == ''){
        const requestAnime = await fetch(`https://api.jikan.moe/v4/anime?genres=${tags}&type=${media}&producers=${studio}`)        
        .then(response => response.json())  
        .then(data => {
            searchData = data.data
        });
        return renderList(searchData)
    }

        const requestAnime = await fetch(`https://api.jikan.moe/v4/anime?genres=${tags}&type=${media}&producers=${studio}&start_date=${year}`)        
        .then(response => response.json())  
        .then(data => {
            searchData = data.data
        });
        return renderList(searchData)

}
