const fs=require('fs')

var file='product.json'

function createFile()
{
    fs.open(file,'w',(e)=>{
        console.log(e)
})
}



function loadData()
{
    console.log("loadData() method called")
    var product=fs.readFileSync(file,{encoding:"utf8"})
    console.log("Data loaded sucessfully")
    console.log(product)
    return JSON.parse(product.toString())
}

function writeData(name,price)
{
    console.log("writeData method called");
  var product=loadData();

  product.push({"name":name,"price":price})

  fs.writeFileSync(file,JSON.stringify(product))

}

module.exports={
    load:loadData,
    writeProduct:writeData,
}