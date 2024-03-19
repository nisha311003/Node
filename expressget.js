var express = require('express');
const fs = require('fs');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',function(req,res){
    res.sendFile(__dirname + '/'+ 'form1.html');
})
app.post('/apply',(req,res)=>{
    response ={
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        gender: req.body.gender,
        addr: req.body.addr
    }
    //const data = JSON.stringify(response);
    res.write(`<table border=1>
    <tr>
    <th>First_Name</th>
    <th>Last_Name</th>
    <th>Gender</th>
    <th>Address</th>
    </tr>
    <tr>
    <td>${response.first_name}</td>
    <td>${response.last_name}</td>
    <td> ${response.gender}</td>
    <td> ${response.addr}</td>
    </tr>
    </table>`);

    
    fs.writeFile('details.txt',JSON.stringify(response),(err)=>{
        if(err) return console.log("error in storing the details");
        console.log("data stored ");
    })
    res.send();
    
})
app.listen(2000);
//we have to input the values it should print on the browser