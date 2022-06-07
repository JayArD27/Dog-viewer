const BREED_URL = "https://dog.ceo/api/breeds/list/all";
const select = document.querySelector('.breeds-selection');
// displaying the breed list to the select tag
fetch(BREED_URL)
    .then (function (response){
        return response.json();
    })
    .then (function (data){
        const breedObject = data.message;
        const breedArray = Object.keys(breedObject);

        for(let i = 0; i < breedArray.length; i++){
            const option = document.createElement('option');
            option.value =  breedArray[i];
            option.innerText = breedArray[i];
            select.appendChild(option);
        }
    })

    select.addEventListener("change", function(event){
        // url to random image
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;
        
        // get the url
        getDog(url);
    });
//fetch the url and change the src of the image
const img = document.querySelector(".dog-img");

    function getDog(url){
        fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                img.src = data.message;
            })
    }