# Cocktails

A website that fetches cocktail recipes from [The Cocktail DB API](https://www.thecocktaildb.com/api.php) and displays them in a website.

## Setting up the project

1. git clone this repository.

2. Initialize npm package management `$ npm init -y`

3. Install [parcel](https://parceljs.org/) through npm `$ npm install --save-dev parcel-bundler`

4. Change the script in the package.json file
```json
{
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

5. Create a index.html file `touch index.html` with DOCTYPE, head, body and the title Cocktails
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Cocktails</title>
</head>
<body>
</body>
</html>
```

6. Test dev script: `npm run dev`

If you open http://localhost:1234 in your browser, you should see the empty website with the title Cocktails in the tab header.

7. Test build script: `npm run build`

This should create a dist folder (short for distribution) which will contain an index.html file.

8. Create a style.css file in the root folder and include it right before the closing `</head>` tag. Test whether it's working by setting the body background-color.

index.html
```html
<link rel="stylesheet" href="style.css"">
```

style.css
```css
body {
   background-color: blanchedalmond;
}
```

9. Add a index.js file and include it in your html file right before the closing `</body>` tag. Test whether it's working by calling `alert`

index.html
```html
<script src="index.js">
```

index.js
```js
alert ("Hello from index.js");
```

10. Add a .gitignore file and exclude the node_modules, dist and .cache folder
```
node_modules/
dist/
.cache/
```

11. Commit everything you have done so far.

## Create a html element through javascript

1. Get rid of the `alert`
2. Create a javascript function called `createCocktailCard`
which takes three arguments: `name`, `imageUrl` and `id`

It should return this div:
```html
<div class="card" data-id={{id}}>
   <h3>{{name}}</h3>
   <img src="{{imageUrl}}">
</div>
```

index.js
```js
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
```

3. Add one cocktail to the body element by calling the function with some arguments

```js
var testCocktailCard = createCocktailCard ("Stinger", "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2ahv791504352433.jpg", 17193);

document.body.appendChild (testCocktailCard);
```

## Query an element with a selector

We don't want to add the cocktail cards directly to the body, instead we want to create a container with a list element inside

1. Edit the html to create a div with the id main-container and inside the container a div with the id cocktail-list

```html
   <div id="main-container">
      <div id="cocktail-list"></div>
   </div>
```

2. We can now select the element using javascript and add our cocktail card to the cocktail-list instead of the body

```js
var cocktailList = document.querySelector ('#cocktail-list');
cocktailList.appendChild (testCocktailCard);
```

## Creating a list of elements from mack data

1. Add a fake apiResponse at the beginning of your index.js file

index.js
```js
var apiResponse = {
   "drinks": [
      {
         "strDrink": "3-Mile Long Island Iced Tea",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rrtssw1472668972.jpg",
         "idDrink": "15300"
       },
       {
         "strDrink": "69 Special",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vqyxqx1472669095.jpg",
         "idDrink": "13940"
       },
       {
         "strDrink": "A1",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2x8thr1504816928.jpg",
         "idDrink": "17222"
       },
       {
         "strDrink": "Abbey Cocktail",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/quyyuw1472811568.jpg",
         "idDrink": "17834"
       },
       {
         "strDrink": "Abbey Martini",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2mcozt1504817403.jpg",
         "idDrink": "17223"
       },
       {
         "strDrink": "Ace",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/l3cd7f1504818306.jpg",
         "idDrink": "17225"
       },
       {
         "strDrink": "Adam & Eve",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vfeumw1504819077.jpg",
         "idDrink": "17226"
       },
       {
         "strDrink": "Addison",
         "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yzva7x1504820300.jpg",
         "idDrink": "17228"
       }
   ]
};
```

2. Test whether this worked by doing a console.log of apiResponse
```js
console.log(apiResponse);
```

3. Now we want to get the drinks from the response and loop over them
```js
var drinks = apiResponse.drinks;

for (var i = 0; i < drinks.length; i++) {
   var drink = drinks[i];
   console.log (drink);
}
```

4. Now instead of appending our one testCocktailCard let's append a cocktail card in every iteration of the loop.

We first have to get our individual properties from the drink. We have to look at the mock data to figure out which property names the apiResponse uses.

```js
var drink = drinks[i];
var name = drink.strDrink;
var imageUrl = drink.strDrinkThumb;
var id = drink.idDrink;
```

Then we can call our createCocktailCard function and append the element it returns to the cocktailList.

```js
for (var i = 0; i < drinks.length; i++) {
   var drink = drinks[i];
   var name = drink.strDrink;
   var imageUrl = drink.strDrinkThumb;
   var id = drink.idDrink;

   var cocktailCard = createCocktailCard (name, imageUrl, id);
   cocktailList.appendChild (cocktailCard);
}
```
5. Clean up your index.js file. Get rid of the console.log(apiResponse) and the testCocktailCard.

## Add an EventListener

Next we want to add a modal spotlight screen with more details about a cocktail, that gets shown when you click on a cocktail card.

1. First inside the createCocktailCard function add the Event Listener

```js
result.addEventListener ('click', function (event) {
   console.log ("You clicked on " + name);
})
```
Check whether the event listener is working.
Instead of logging to the console we want to add a new html element to the document, that will overlay the full screen.

2. Write a function called createCocktailSpotlight, which takes again the name, title and id as parameters and returns an html element like this:
```html
<div id="spotlight">
   <div id="spotlight-card">
      <h1>{{name}}</h1>
      <img src={{imageUrl}}>
      <p>Instructions will go here...</p>
   </div>
</div>
```

index.js
```js
function createCocktailSpotlight(name, imageUrl, id) {
   var result = document.createElement('div');
   result.id = 'spotlight';

   // Create a card for the cocktail details
   var card = document.createElement ('div');
   card.id = 'spotlight-card';

   var h1 = document.createElement('h1');
   h1.textContent = name;
   card.appendChild(h1);

   var img = document.createElement('img');
   img.src = imageUrl;
   card.appendChild(img);

   // We'll fetch the instructions later from the API using the id
   var instructions = document.createElement ('p');
   instructions.textContent = "Instructions will go here";
   card.appendChild (instructions);

   // Add the card to the spotlight
   result.appendChild (card);

   return result;
}
```

3. Add some style so its always on top

style.css
```css
#overlay {
   position: fixed;
   top: 0px;
   left: 0px;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.5);
}

#spotlight-card {
   background-color: blanchedalmond;
   width: 50vw;
}
```

4. Next we want to add it to the html body, whenever we click on a card. So in our Event listener in createCocktailCard we add this.

```js
result.addEventListener ('click', function (event) {
   var spotlight = createCocktailSpotlight (name, imageUrl, id);
   document.body.appendChild (spotlight);
});
```

Now when we click on a card we should see an overlay with the spotlight apper.

5. Once we click on a cocktail card the spotlight will stay on the site forever. Let's add an Event Listener to the spotlight, to remove it again, when we click on it.

index.js in createCocktailSpotlight()
```js
result.addEventListener('click', function (event) {
   result.remove();
})
```

## Basic styling

Make it pretty.

### Inspirtation
![](https://images-na.ssl-images-amazon.com/images/I/51BXZ-y8PQL.jpg)

![](https://cdn.shopify.com/s/files/1/0059/0318/8021/products/COC001-cocktail-poster-1_1024x1024.jpg?v=1542817836)

![](https://www.nosoloposters.com/7686-thickbox_default/poster-lily-val-cocktails.jpg)

![](https://ctl.s6img.com/society6/img/uFd0rnqX6kUvJJ75gtmw_evzRbY/w_700/prints/~artwork/s6-0042/a/18958001_4934003/~~/art-deco-cocktail-recipe-poster-prints.jpg?wait=0&attempt=0)

![](https://img.posterlounge.de/images/big/1866034.jpg)