# Cocktails

## Setting up the Project

1. Initialize npm package management `$ npm init -y`

2. Install [parcel](https://parceljs.org/) through npm `$ npm install --save-dev parcel-bundler`

3. Change the script in the package.json file
```
{
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

4. Create a index.html file `touch index.html` with DOCTYPE, head, body and the title Cocktails
```
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
```
<link rel="stylesheet" href="style.css"">
```

style.css
```
body {
   background-color: blanchedalmond;
}
```

8. Add a index.js file and include it in your html file right before the closing `</body>` tag. Test whether it's working by calling `alert`

index.html
```
<script src="index.js">
```

index.js
```
alert ("Hello from index.js");
```

7. Add a .gitignore file and exclude the node_modules, dist and .cache folder
```
node_modules/
dist/
.cache/
```

8. Initialize git: `git init` and commit everything.
