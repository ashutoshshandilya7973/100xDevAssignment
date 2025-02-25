import express from 'express';

const app = express();
const port = 3000;
let noOfRequest=0;
const incomeMiddleware=(req,res,next)=>{
      const data={
        noOfRequest:++noOfRequest,
        method:req.method,
        url:req.url,
        date:Date.now()
      }
      console.log(data)
      
      next()
      console.log(req.params)

}
// app.use(incomeMiddleware)
app.post('/sum/:num1/:num2',incomeMiddleware, (req, res) => {   
    const { num1, num2 } = req.params;
    const sum = Number(num1) + Number(num2);
    res.json({ sum });
});

app.post('/sub/:num1/:num2',incomeMiddleware,(req,res)=>{
    const {num1,num2}=req.params;
    const sub=Number(num1)-Number(num2);
    res.json({sub});
})

app.post('/multiply/:num1/:num2',incomeMiddleware,(req,res)=>{
    const {num1,num2}=req.params;
    const multiply=Number(num1)*Number(num2);
    res.json({multiply});
})

app.post('/divide/:num1/:num2',incomeMiddleware,(req,res)=>{
    const {num1,num2}=req.params;
    const divide=Number(num1)/Number(num2);
    res.json({divide})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
