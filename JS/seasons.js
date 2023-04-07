async function searchBySeason(producer){

    const season = document.getElementById('seasonPhase').value;
    const year = document.getElementById('seasonYear').value;


        pagination = 1
        searchData = []
    
        for(var i = 0; i < 3; i++){
            const results = await fetch(`https://api.jikan.moe/v4/seasons/${year}/${season}?page=${pagination}`)
            .then(response => response.json())  
            .then(data => {
                searchData.push(data.data)
                console.log('TEST')
                })             
            pagination += 1;
        }

        combineArrays(searchData)
}
