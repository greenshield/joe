const express = require('express')

var bodyParser = require('body-parser')

const app = (module.exports = express())

app.use(express.json({limit:'200mb'}))

app.use(express.urlencoded({limit:'200mb',extended:true}))

const port = 5100

var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient

MongoClient.connect(
	'mongodb://localhost:27017/?connectTimeoutMS=5000&socketTimeoutMS=5000',
	{		
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err, db) => {
		if (err) {
			//throw err
            console.log(err)
		} else {
			app.db = db.db('joe')
		}
	}
)


app.post('/status', async (req, res) => {

 
    let user = await app.db.collection('users').findOne({name: req.body.name})

    

        res.send({status: user.status,title: user.title})
    


})

app.post('/users', async (req, res) => {

 
    let users = await app.db.collection('users').find().toArray()

    

        res.send({users: users})
    


})

app.post('/user', async (req, res) => {

 
    let user = await app.db.collection('users').findOne({name:req.body.userID})

    

        res.send({user: user})
    


})

app.listen(port, () => {
  
})