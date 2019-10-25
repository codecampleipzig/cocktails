# Cocktails

A website that fetches cocktail recipes from [The Cocktail DB API](https://www.thecocktaildb.com/api.php) and displays them in a website.

## Setting up the Project

1. Initialize npm package management `$ npm init -y`

2. Install [parcel](https://parceljs.org/) through npm `$ npm install --save-dev parcel-bundler`

3. Change the script in the package.json file
```json
{
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

4. Create a index.html file `touch index.html` with DOCTYPE, head, body and the title Cocktails
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

5. Test dev script: `npm run dev`

If you open http://localhost:1234 in your browser, you should see the empty website with the title Cocktails in the tab header.

6. Test build script: `npm run build`

This should create a dist folder (short for distribution) which will contain an index.html file.

7. Create a style.css file in the root folder and include it right before the closing `</head>` tag. Test whether it's working by setting the body background-color.

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

8. Add a index.js file and include it in your html file right before the closing `</body>` tag. Test whether it's working by calling `alert`

index.html
```html
<script src="index.js">
```

index.js
```js
alert ("Hello from index.js");
```

7. Add a .gitignore file and exclude the node_modules, dist and .cache folder
```
node_modules/
dist/
.cache/
```

8. Initialize git: `git init` and commit everything.

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