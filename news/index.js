const espress=require('express');
const server=express();
const path=require('path');
server.get('/',(req,res)=>{
    res.sendfile(
        path.resolve('./address.html')
    )
});
server.listen(80);
