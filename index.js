function createCocktailCard(name, imageUrl, id) {
   var result = document.createElement('div');

   // Setting the class
   result.classList.add('card');

   // Setting the data-id attribute
   result.dataset.id = id;

   var img = document.createElement('img');
   img.src = imageUrl;
   result.appendChild(img);

   var h3 = document.createElement('h3');
   h3.textContent = name;
   result.appendChild(h3);

   // Add some function to be called whenever we click the element
   result.addEventListener('click', function (event) {
      var spotlight = createCocktailSpotlight(name, imageUrl, id);
      document.body.appendChild(spotlight);
   })

   return result;
}

function createCocktailSpotlight(name, imageUrl, id) {
   var result = document.createElement('div');
   result.id = 'spotlight';

   // Create a card for the cocktail details
   var card = document.createElement('div');
   card.id = 'spotlight-card';

   var img = document.createElement('img');
   img.src = imageUrl;
   card.appendChild(img);

   var h1 = document.createElement('h1');
   h1.textContent = name;
   card.appendChild(h1);

   var instructions = document.createElement('p');

   var responsePromise = fetchJSON ("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id);

   responsePromise.then (function (apiResponse) {
      var drink = apiResponse.drinks[0];
      instructions.textContent = drink.strInstructions;
   });

   card.appendChild(instructions);

   // Add the card to the spotlight
   result.appendChild(card);

   result.addEventListener('click', function (event) {
      result.remove();
   })

   return result;
}

function addCocktailCards(drinks) {
   var cocktailList = document.querySelector('#cocktail-list');
   for (var i = 0; i < drinks.length; i++) {
      var drink = drinks[i];
      var name = drink.strDrink;
      var imageUrl = drink.strDrinkThumb;
      var id = drink.idDrink;
      var cocktailCard = createCocktailCard(name, imageUrl, id);
      cocktailList.appendChild(cocktailCard);
   }
}

function fetchJSON(url) {
   return new Promise (function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open ("GET", url);
      request.addEventListener ("load", function (event) {
         if (request.status == 200) {
            resolve(JSON.parse (request.response));
         }
         else {
            reject();
         }
      })
      request.send();
   });
}

async function init() {
   var apiResponse = await fetchJSON("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin");
   addCocktailCards (apiResponse.drinks);
};

init();
