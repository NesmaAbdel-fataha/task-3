//local host//
const express = require("express")

const app = express()

const port = process.env.PORT || 3000


const path = require ("path")
const publicDirectory =  path.join(__dirname , '../public')
app.use (express.static (publicDirectory))

// app.get( "/" , (req,res)=>{
//         res.send("hello home page")
//     })

    app.get( "/back" , (req,res)=>{
        res.send("back page")
    })

    app.get( "/about" , (req,res)=>{
        res.send("about page")
    })

    app.get( "/prices" , (req,res)=>{
        res.send("prices page")
    })

    // app.get( "/team" , (req,res)=>{
    //     res.send("team page")
    // })
    app.get( "/page" , (req,res)=>{
        res.send({
            name: "islam",
            age: 22,
            city: "cairo"
        })
    })
    app.get( "/page2" , (req,res)=>{
        res.send("<h2> my name is islam </h2> <button>ok</button>")
    })
////////////////////////////////////
// const path = require("path")
// //console.log(__dirname)
// const x = path.join(__dirname , '../public')
// app.use(express.static(x))



    
    /////////////////////////////////
    app.set('view engine', 'hbs');
const viwesDirctory = path.join(__dirname , "../temp/views")
app.set("views" , viwesDirctory)
/////////////////////////////////////////////////////
var hbs =require("hbs")
const partialsPath = path.join(__dirname , "../temp/partials")
hbs.registerPartials(partialsPath)
//////////

app.get('/' , (req , res)=>{
    res.render('index' , {
        title: 'home',
        desc: "home pageee"

    })
})
app.get('/service',(req,res)=>{
    res.render('service' , {
        title: 'SERVICE',
        desc: "service pageee",
        city: "asute",
        name:"mayar",
        age:32,
        img1 : "images/img1.jpg"

    })

})

app.get('/team',(req,res)=>{
    res.render('team' , {
        title: 'team page1',
        desc: "team pageee",
       
        name:"jack",
        age:32,
        img1 : "images/campixel.jpg"

    })

})







    app.listen(port , ()=>{
        console.log(`app listening ${port}`)
    })
