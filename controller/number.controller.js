
// exports.api=async(req,res)=>{


//     function fizzbuzz(number){
//         for(var i=1;i<number;i++){
//             if(i%3 ===0 ){
//                 console.log("FizzBuzz")
//             }else if(i % 3 ===0){
//            console.log("Fizz")
//             } else if (i % 5 ===0 ){
//                 console.log("Buzz")
//             }else{
//                 console.log("Value of i is"+i);
//             }
//         }
//     }
// }
    
// export const helloWorld = ({ response }) => {
//     response.body = {
//         message: "Hello World!",
//     };
// };
// exports.calculateFizzBuzz = (req,response) => {
//     // let message = "";
//     const input = req.params.id;
//     for(let i=0 ; i<input;i++){
//     if (input % 15 === 0) {
//         response.json( "FizzBuzz");
//     }
//     else if (input % 3 === 0) {
//         response.json("Fizz");
//     }
//     else if (input % 5 === 0) {
//         response.json("Buzz");
//     }
//     else {
//        response.json(input);
//     }
//     response.body = {
//         message
//     };}
// };


   function fizzbuzz(number){
            for(var i=1;i<number;i++){
                if(i%3 ===0 ){
                    console.log("FizzBuzz")
                }else if(i % 3 ===0){
               console.log("Fizz")
                } else if (i % 5 ===0 ){
                    console.log("Buzz")
                }else{
                    console.log("Value of i is"+i);
                }
            }
        }
    