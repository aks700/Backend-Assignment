var readLine = require('readline')

var r1 = readLine.createInterface({
    input: process.stdin,
    output: process.output
})
var obj = require('./writeFileSync')

r1.question("Enter Name ", function (name) {
    r1.question("Enter price ", function (price) {
        obj.writeProduct(name, price);
    })
})