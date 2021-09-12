const express= require("express")
const {calculateFizzBuzz}=require("../controller/number.controller");



const Router = express.Router();

Router.get("/fizzbuzz/:id",(req,res)=>{
let {input}=req.params.id;
if (input % 15 === 0) {
    res.json( "FizzBuzz");
        }

});

module.exports = Router;