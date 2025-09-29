const fs=require('fs')
var file='backup_products.json'

let {load,write}=require('./writeFileSync')

let result;
function readProduct()
{
   result=load();
//    console.log(result)
//    console.log(typeof result)
   console.log("data has been read succesfully")
}

function writeProduct()
{
    console.log("Data is being copied...")
    // console.log(result)

    fs.writeFile(file,JSON.stringify(result),{
        flag:'w'
    },(e)=>{
        if(e)
            console.log("Error crating file: ",file)
        else{
            console.log("File created successfully")
            console.log("Product data cloned to file :",file)
        }
    })  

    // console.log('File created and data is copied sucessfully')

    
}


module.exports={
    readProduct,
    writeProduct,
    file
}
