const colors = require('colors');

const chosenColor = colors.getrandomColor();

const favorite = colors.getBlue();

console.log(`You should use ${chosenColor.name} on your Website. It's HTML code is ${chosenColor.code}`);

console.log(`My favorite color is ${favorite.name} , and it's color code is ${favorite.code}`);