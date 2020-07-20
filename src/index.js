console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let array = ["<ul>"];
let dropdown = document.getElementById('breed-dropdown');

function fetchDogImgs() {
    return fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderDogImgs(json)); 
}

function renderDogImgs(dogImgs) {
    const main = document.getElementById('dog-image-container')
    dogImgs.message.forEach(dogImg => {
        const img = document.createElement ('img')
        img.src = dogImg
        main.appendChild(img)
    })    
}

function fetchDogBreeds() {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderDogBreeds(json));
}

function renderDogBreeds(dogBreeds) {
    ul = document.getElementById('dog-breeds')
    Object.keys(dogBreeds.message).forEach(function(key) {
    let dogBreed = dogBreeds.message[key];
    const breedList = document.createElement('li');
    breedList.innerText = key;
    breedList.className = 'breed'
    breedList.style.display = ""
    breedList.addEventListener('click', function() {
        console.log('breed clicked')
        if (breedList.style.color == '') {
            breedList.style.color = 'red'}
        else 
            { breedList.removeAttribute('style') }

    } )
    ul.appendChild(breedList);
    if (!(dogBreed.length == 0)) 
        {
            subBreedList = document.createElement('ul')
            breedList.appendChild(subBreedList)
            for (var i = 0; i < dogBreed.length; i++) 
                {
                    document.create
                    li = document.createElement('li')
                    li.innerText = dogBreed[i]
                    li.className = 'subbreed'
                    subBreedList.appendChild(li)
                }
        }

    })
}


function addBreedSelectListener() {
    let breedDropdown= document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function(event){
      selectedList(event.target.value);
    });
  }

function selectedList(selection) {
    console.log(selection)
    unfilteredListItems = document.querySelectorAll('li.breed')
    unfilteredListItems.forEach(function(listItem) { 
        console.log(listItem)
        if (listItem.innerHTML.startsWith(selection)) {
            listItem.style.display = ""
        } 
        else {
            listItem.style.display = "none"
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchDogImgs()
    fetchDogBreeds()
    addBreedSelectListener()
  })

  