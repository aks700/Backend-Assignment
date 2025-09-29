const fs=require('fs')
let {readProduct,writeProduct,file}=require('./copy')


function user1SyncRead()
{
    let data=fs.readFileSync(file,{encoding: 'utf8'});
    console.log("User 1 reads: ",JSON.parse(data.toString()))
}


function user2AsyncRead()
{
    let data=fs.readFile(file,{encoding: 'utf8'})
    console.log("User 2 reads: ",JSON.parse(data.toString()))
}

function user3AsyncRead()
{
   let data=fs.readFile(file,{encoding: 'utf8'})
    console.log("User 3 reads: ",JSON.parse(data.toString()))
}



function delFile()
{
  console.log("Going to delete an existing file");

    fs.unlink(file, function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("File deleted successfully!");
    });
}


readProduct();
writeProduct();
user1SyncRead();
user2AsyncRead();
user3AsyncRead();
delFile();







