console.log ('May Node be with you')

const express =  require('express')
const bodyParser = require('body-parser')
const { localsName } = require('ejs')
const app = express()
const MongoClient = require('mongodb').MongoClient
const connectionString = 'mongodb+srv://sleepGuy:wdCRUD@cluster0.jdbzmzw.mongodb.net/?retryWrites=true&w=majority'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    app.set('view engine', 'ejs')

    app.use(bodyParser.urlencoded({extended: true}))

    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html')
      const cursor = db.collection('quotes').find().toArray()
      .then(results => {
        
      })
      .catch(error => console.error(error))
      res.render('index.ejs', {quotes: results})

      //begin from here - "Using EJS and install"
    })
    
    app.post('/quotes', (req, res) => {
      quotesCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/')
      })
      .catch(error => console.error(error))
    })

    app.listen(3000, function() {
      console.log('listening on 3000')
    })
  })
  .catch(error => console.error(error))







//mongoDB
//sleepGuy
//wdCRUD