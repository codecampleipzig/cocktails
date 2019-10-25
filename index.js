function createCocktailCard (name, imageUrl, id) {
   var result = document.createElement ('div');

   // Setting the class
   result.classList.add ('card');

   // Setting the data-id attribute
   result.dataset.id = id;
   
   var h3 = document.createElement ('h3');
   h3.textContent = name;
   result.appendChild (h3);

   var img = document.createElement ('img');
   img.src = imageUrl;
   result.appendChild (img);

   return result;
}

var testCocktailCard = createCocktailCard ("Stinger", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2ahv791504352433.jpg", 17193);

var cocktailList = document.querySelector ('#cocktail-list');
cocktailList.appendChild (testCocktailCard);
