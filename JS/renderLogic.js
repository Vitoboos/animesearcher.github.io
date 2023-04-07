function combineArrays(array){
    
    newArray = []

    array.forEach(page => {
        for(var item = 0; item < page.length; item++){
            newArray.push(page[item])
        }
    });

    renderList(newArray)
}


function renderList(array){

    const main = document.getElementById('renderSearchBox')

    main.innerHTML = '';

    for (var i = 0; i < array.length; i++){

        name = array[i].title;
        image = array[i].images.jpg.image_url;
        episodes = array[i].episodes;
        duration = array[i].duration;
        score = array[i].score;

        if (score == null){
            score = 'Not rated';
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
        animeName.href = array[i].url;
        var nameText = document.createTextNode(name);
        animeName.appendChild(nameText);
        animeName.classList.add("animeTitle");

        var animeImage= document.createElement('img');
        animeImage.src=image;
        animeImage.classList.add('animeCover');

        var animeEpisodes= document.createElement("p");
        var episodesText = document.createTextNode("Episodes: " + episodes);
        animeEpisodes.appendChild(episodesText);
        animeEpisodes.classList.add('animeEpisodes');

        var animeDuration = document.createElement("p");
        var durationText = document.createTextNode("Duration per episode: " + duration);
        animeDuration.appendChild(durationText);
        animeDuration.classList.add('animeDuration');

        var animeScore = document.createElement("p");
        var scoreText = document.createTextNode("Score: " + score);
        animeScore.appendChild(scoreText);
        animeScore.classList.add('animeScore');

        // Append anime to main 
        titleBox.appendChild(animeName);
        animeBox.appendChild(animeImage);
        animeBox.appendChild(animeEpisodes);
        animeBox.appendChild(animeDuration);
        animeBox.appendChild(animeScore);

    }
}
