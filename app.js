const mysql=require('mysql2');
const express=require('express');
var app=express();
const path = require('path');
const parser=require('body-parser');
app.use(parser.json());
app.use(express.urlencoded());
//app.use(express.static('public'));
app.use(express.static(__dirname+'../'));
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'vauct'
    });
    connection.connect((err)=>
    {
        if(!err)
        console.log('DB Connected...');
        else
        console.log('Error');
    })
     app.listen(5700,()=>console.log('Server Startred...'));
     app.get('/register',(req,res)=>
     {
         //console.log(req.url);
         res.sendFile(__dirname +'/register24.html');
     });

     app.get('/login',(req,res)=>
     {
         res.sendFile(__dirname +'/login24.html');
     });

    app.post('/submit',(req,res)=>
    {
        console.log("hii");
        console.log(req.body);
        var sql="insert into register SET ?";
        var data=req.body;
        var  query=connection.query(sql,data,(err,result)=>
        {
            if(err) throw err;
            res.send("Inserted rows....");
        });
        // connection.query('SELECT *FROM employee WHERE Empid=?',[req.params.id],(err,rows,fields)=>
        // {
        //     if(!err)
        //     res.send(rows);
        //     else
        //     console.log("error");
        // })
    })

    app.post('/submit1',(req,res)=>
    {
        console.log("hey");
        console.log(req.body);
        var sql="insert into login SET ?";
        var data=req.body;
        var  query=connection.query(sql,data,(err,result)=>
        {
            if(err) throw err;
            res.send("Inserted rows....");
        });
    })