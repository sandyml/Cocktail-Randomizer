document.addEventListener('click', showRandomCocktail);
const button = document.querySelector("#button");
button.addEventListener('click', getNewCocktail);
const img = document.createElement('img');
const cocktailName = document.createElement('h2');
const heartButton = document.getElementById('heart-button');
const cocktailSection = document.querySelector('#cocktail-section');
// const form = document.getElementById('form');
 
// from fetch API https://web.dev/introduction-to-fetch/
function getNewCocktail() {
   fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
   .then(
   function(resp) {
       if (resp.status !== 200) {
       return;
       }
       resp.json().then(function(data) {
// display new info on the page  will pass data as our parameter
       showRandomCocktail(data);
       });
   }
   )
   .catch(function(error) {
   });
}
getNewCocktail();
 
//display new info on the page will pass data as our parameter after create function w parameter as cocktail
function showRandomCocktail(cocktail) {
 
   cocktailName.innerHTML = cocktail.drinks[0].strDrink;
   cocktailSection.appendChild(cocktailName);
   img.src = cocktail.drinks[0].strDrinkThumb;
   cocktailSection.appendChild(img);
// 16 ingredients in randomizer
   for(let i = 1; i < 16; i++) {
       if(cocktail.drinks[0][`strIngredient${i}`] == '' || cocktail.drinks[0][`strIngredient${i}`] == null) {
           break;
       }
 
   const cocktailIngredient = document.createElement('list-item');
   cocktailIngredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];
   cocktailSection.appendChild(cocktailIngredient);
   // console.log(cocktailIngredient);
}
 
// Instructions utilizing strInstructions
const manual = document.createElement('manual');
manual.innerHTML = cocktail.drinks[0].strInstructions;
cocktailSection.appendChild(manual);
}

function logSubmit(event) {
   log.textContent = `Yay to new Cocktails! Thank you for subscribing!`;
   event.preventDefault();
 }
 
 const form = document.getElementById('form');
 const log = document.getElementById('log');
 form.addEventListener('submit', logSubmit);

// HEART button listener

heartButton.addEventListener("click", () =>{
   
    console.log(heartButton)
  if (heartButton.classList.contains("liked")) {
    heartButton.classList.remove("liked");
  } else {
    heartButton.classList.add("liked");
  }

});
