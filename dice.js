// declare a array with 0 - 12 fo the number of sides
const dice_sides = [];
dice_sides[0] = "Best Consumer Solution.";
dice_sides[1] = "Best Enterprise Solution.";
dice_sides[2] = "Most Innovative Solution";
dice_sides[3] = "Best Gaming Solution";
dice_sides[4] = "Best Health Solution";
dice_sides[5] = "Best Educational Solution";

var sides = dice_sides[Math.floor(Math.random() * dice_sides.length)];

console.log(sides);