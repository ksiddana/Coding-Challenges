function staircase(n) {
    output = '#';
    
    for (var i = 0; i < n; i++) {
    var line = [];
        
        for (var j = n - 1; j > i; j--){
            line.push(" ");    
        }

        for (var k = 0; k <= i; k++) {

            line.push("#");
        }
        console.log(line.join(""));
    }  
    
}

function staircase1(n) {
    var output = '';
    
    for (var i = 0; i < n; i++) {
        output += ' ';
    }

    output = output.split('');
    
    for (var j = n-1; j >= 0; j--) {
        output[j] = "#"
        console.log(output.join(""));
    }
    
}

staircase1(6);