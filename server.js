const express=require("express");
const request=require("request-promise");
const app=express();




const apiKey='c40991375c1ec7e525350cbace10330e';
const baseUrl=`http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;
const PORT= process.env.PORT  || 4500;

app.use(express.json());


app.get("/",(req,res)=>{

res.send("welcome to api");

});
// Get Product details

app.get('/products/:productId',async(req,res)=>{
const {productId}=req.params;
try {
    const response=await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`);
  
    res.json(JSON.parse(response));
   
} catch (error) {
    res.json(error)
}

})

app.get('/products/:productId/reviews',async(req,res)=>{
    const {productId}=req.params;
    try {
        const response=await request(`${baseUrl}&url=https://www.amazon.com/product-reviews/${productId}`);
      
        res.json(JSON.parse(response));
       
    } catch (error) {
        res.json(error)
    }
    
    })


app.listen(PORT,()=>{

console.log(`server is running at port number ${PORT}`);


})