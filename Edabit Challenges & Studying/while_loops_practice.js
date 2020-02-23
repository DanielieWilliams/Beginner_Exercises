"user strict";

// Create a while loop that uses console.log() to create the output shown below.
//
//
// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536

var i = 1;

while( i < 65536){
    console.log(i *= 2);
}


//While Loop Iteration Example//
var i = 0;

while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}
/// while loop iteration #0
// while loop iteration #1 and so on//