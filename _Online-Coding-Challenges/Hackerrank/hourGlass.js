var arr = [ [ 1, 1, 1, 0, 0, 0 ],
           [ 0, 1, 0, 0, 0, 0 ],
           [ 1, 1, 1, 0, 0, 0 ],
           [ 0, 9, 2, -4, -4, 0 ],
           [ 0, 0, 0, -2, 0, 0 ],
           [ 0, 0, -1, -2, -4, 0 ] ]


var findHourGlassTotal = function(arr) {
var matrix = arr.slice();
var total = 0;
var tempTotal = [];

matrix.forEach(function(row, rowIdx) {
    row.forEach(function(square, colIdx){
        var hourGlass = [];
        
        
        if (rowIdx - 1 >= 0 && rowIdx + 1 < matrix[0].length) {
            if (colIdx -1 >= 0 && colIdx + 1 < matrix.length) {
                hourGlass.push(matrix[rowIdx][colIdx])
                hourGlass.push(matrix[rowIdx - 1][colIdx])
                hourGlass.push(matrix[rowIdx + 1][colIdx])
                hourGlass.push(matrix[rowIdx + 1][colIdx + 1])
                hourGlass.push(matrix[rowIdx + 1][colIdx - 1])
                hourGlass.push(matrix[rowIdx - 1][colIdx + 1])
                hourGlass.push(matrix[rowIdx - 1][colIdx - 1])
                
            }
        }
        tempTotal.push(sumOfHourGlass(hourGlass));
        
    })
})


total =  Math.max.apply(null, tempTotal);
console.log(total); 
  
}

var sumOfHourGlass = function(hourGlass) {
var total = 0;

hourGlass.forEach(function(entry) {
    total += entry;
})

return total;
}


findHourGlassTotal(arr);

