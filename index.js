const express=require('express');
const server=express();
const path=require('path');
server.use(express.static('./news'))
server.get('/',(req,res)=>{
    res.sendfile(
        path.resolve('./news/address.html')
    )
});
server.listen(5000);
