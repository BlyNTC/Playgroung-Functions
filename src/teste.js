let dataset = [2,8,4,8,6,4,7,8];
let max= Math.max(...dataset);
var count = dataset.reduce(function(counter, value) {
    return counter + (value === max);
}, 0);
console.log(count);