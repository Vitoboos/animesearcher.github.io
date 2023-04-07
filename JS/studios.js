async function searchByStudio(producer){

    const studio = document.getElementById('search').value
    const main = document.getElementById('renderSearchBox')

    main.innerHTML = '';

        const results = await fetch("https://api.jikan.moe/v4/producers?letter="+studio)
        .then(response => response.json())  
        .then(data => {
            console.log(data.data)
            searchList = data.data

            for (var i = 0; i < searchList.length; i++){

                name = searchList[i].titles[0].title;
                console.log(name);
                image = searchList[i].images.jpg.image_url;
                count = searchList[i].count;

                if (count == null){
                    count = 'None';
                }

                // Append item to main grid

                var animeBox = document.createElement("div");
                main.appendChild(animeBox);
                animeBox.classList.add("animeBox");

                // Append content to grid item

                var titleBox = document.createElement("div");
                titleBox.classList.add("titleBox");
                animeBox.appendChild(titleBox);
                var animeName = document.createElement("a");
                var nameText = document.createTextNode(name);
                animeName.appendChild(nameText);
                animeName.classList.add("animeTitle");

                var animeImage= document.createElement('img');
                animeImage.src=image;
                animeImage.classList.add('studioCover');

                var animeCount = document.createElement('div');
                animeCount.classList.add('countBox');   
                var countText = document.createElement('p');
                animeCount.classList.add('studioCount')
                countText.innerText = count;
                animeCount.appendChild(countText);

                // Append anime to main 
                titleBox.appendChild(animeName);
                animeBox.appendChild(animeImage);
                animeBox.appendChild(animeCount);

            }
        });

}
