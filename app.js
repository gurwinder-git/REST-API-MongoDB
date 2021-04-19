const express = require('express');
require('./db/connection');
const Blogs = require('./model/blogCollection');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
})

// app.post('/blog',(req,res)=>{
//     // console.log(req.body);
//     const obj = new Blogs(req.body);

        // Promises are basically javascript objects used asynchronously. In a synchronous execution, you don't need states, per se. Your code either successfully execute or fail to execute. In asynchronous code, we execute, wait for callbacks and decide if its success or failure and continue with the synchronous code execution.
        
//     const result = obj.save()   //result variable will store promise nothing else
//     .then(()=>{
//         res.status(201).send(obj);
//         console.log('saved')
//     })
//     .catch((e)=>{
//         res.status(400).send(e);
//         console.log('error not saved')
//     });

//     //this console will show promise pending
//     console.log("this is not result",result);
// })

//Create blog
app.post('/blog', async(req,res)=>{
    // console.log(req.body);
    try{
        const obj = new Blogs(req.body);
        // await only blocks the code execution within the async function. It only makes sure that the next line is executed when the promise resolves. So, if an asynchronous activity has already started, await will not have an effect on it.
        const result = await obj.save();
        console.log("i am waiting until you not full-fill the promise",result);
        res.status(201).send(result);
    }catch(e){
        res.status(400).send(e);
    }
})


//Get Blogs
app.get('/blog', async(req,res)=>{
    // console.log(req.body);
    try{
        const result = await Blogs.find();
        console.log(result);
        res.status(200).send(result);
    }catch(e){
        res.status(400).send(e);
    }
})

//Get Blog
app.get('/blog/:id', async(req,res)=>{
    // console.log(req.params);
    try{
        const result = await Blogs.findById({_id: req.params.id});
        // console.log(result);
        res.status(200).send(result);
        
    }catch(e){
        res.status(400).send(e);
    }
})

//update blog
app.patch('/blog/:id', async(req,res)=>{
    // console.log(req.params);
    try{
        const result = await Blogs.findByIdAndUpdate({_id: req.params.id},{$set: req.body}, {new: true});
        // console.log(result);
        res.status(200).send(result);
    }catch(e){
        res.status(400).send(e);
    }
})

//Delete Blog
app.delete('/blog/:id', async(req,res)=>{
    // console.log(req.params);
    try{
        const result = await Blogs.findByIdAndDelete({_id: req.params.id});
        // console.log(result);
        res.status(200).send(result);
    }catch(e){
        res.status(400).send(e);
    }
})


const port = process.env.PORT || 4000;
app.listen(port, ()=>{console.log('Connection listen on port',4000)});