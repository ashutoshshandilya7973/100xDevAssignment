import express from 'express'
import fs from 'fs'
import JWT from 'jsonwebtoken'
import 'dotenv/config';
import { checkMiddleware } from './checkMiddleware.js';
const app = express();
app.use(express.json())
app.post('/signin', (req, res) => {
    const { name, password } = req.body;
    const data = fs.readFileSync('data.json', 'utf8');
    if (data) {
        const newdata = JSON.parse(data);
        const info = newdata.find((data) => data.name = name);
        if (!info) {
            res.status(400).send({ message: "your are not registered please register yourself" })

        } else {
            const token = JWT.sign({ name: name }, process.env.SECRET_KEY)
            info.token = token
            res.status(200).send({ message: "you are successfully login", data: info })
        }

    } else {
        res.status(400).send({ message: "your are not registered please register yourself" })
    }


})

app.post('/signup', (req, res) => {
    const { name, password } = req.body;
    const data = fs.readFileSync('data.json', 'utf8');
    if (data) {
        const newdata = JSON.parse(data);
        const info = newdata.find((data) => data.name === name);
        if (info) {
            res.status(300).send({ message: "user already registered", data: info })
        } else {
            const info = {
                name: name,
                password: password
            }
            newdata.push(info);
            const upload = fs.writeFileSync('data.json', JSON.stringify(newdata, null, 2), 'utf8')
            res.status(200).send({ message: "you are successfully registered", data: upload })

        }

    } else {
        let list = [];
        const info = {
            name: name,
            password: password
        }
        list.push(info);
        const upload = fs.writeFileSync('data.json', JSON.stringify(list, null, 2), 'utf8')
        res.status(200).send({ message: "you are successfully registered", data: upload })
    }
})

app.get('/info',checkMiddleware,(req,res)=>{
    const {name}=req.user
    const info =fs.readFileSync('data.json','utf8');
    const newInfo=JSON.parse(info)
    const data=newInfo.find((data)=>data.name===name);
    res.status(200).send({message:"you have your information in the app",data:data})

})

app.listen(3002, () => {
    console.log(`server is connected and your app is listening on the port 3002`)
})