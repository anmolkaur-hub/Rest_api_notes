// Creating server
// Config server
const express = require('express');
const app = express()


app.use(express.json())
const notes=[
    // {

    // }
]

// creating a note
app.post('/notes',(req,res)=>{
    console.log(notes)
    notes.push(req.body)
    res.send("Note Created")
})



app.get('/notes', (req, res) => {
    res.send(notes);
});




// fetching notes
app.get("/",(req,res)=>{
    res.send("hello world")
})





// Deleting a note
app.delete('/notes/:index',(req,res)=>{
    console.log(req.params)
})

module.exports=app