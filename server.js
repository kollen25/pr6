require("dotenv").config();
const express = require("express");
const mysql=require("mysql2/promise");

const server = express();

server.use(express.static(__dirname + "/public"));
server.use(express.json);

server.get("/",(res,req)=>{
    res.sendFile(__dirname + "/index.html")
})
const conn=mysql.createPool({
    host:process.env.HOST_DB,
    user:process.env.USER_DB,
    password:process.env.PASSWORD_DB,
    database:process.env.NAME_DB,
    connectionlimit:5})
   
server.post("/addStudent",async(req,res)=>{
    const{last_name,first_name,groupst}=req.body
    await connect.query("isert into students(last_name,first_name,email,group_st)values(?,?,?,?)",[last_name,first_name,email,groupst],(err,rsults)=>{
        if(err){
            return res.status(500).json({message:"oshibka"})
        }
        res.status(200).json("dob");
    })
    
})
server.post("/updateStudent",async(req,res)=>{
    const{last_name,first_name,groupst}=req.body
    await connect.query("update students set students(last_name,first_name,email,group_st)values(?,?,?,?)",[last_name,first_name,email,groupst],(err,rsults)=>{
        if(err){
            return res.status(500).json({message:"oshibka"})
        }
        res.status(200).json("dob");
    })
    
})
server.post("/deleteStudent",async(req,res)=>{
    const{last_name,first_name,groupst}=req.body
    await connect.query("delete from students where id_st=?",[id_st],(err,rsults)=>{
        if(err){
            return res.status(500).json({message:"oshibka"})
        }
        res.status(200).json("dob");
    })
    
})
server.listen(process.env.PORT,()=>{
    console.log("")
})