const express = require("express");
//Node.js body parsing middleware.
const bodyParser = require("body-parser");
//Connect/Express middleware 
const cors = require("cors");
//MongoDB
const {MongoClient} = require('mongodb');
const { restart } = require("nodemon");


const app = express();
//URL to MongoDB server (local)
const dburl = 'mongodb://localhost:27017';



//connect to MongoDB
const client = new MongoClient(dburl);

//ta perissotera pragmata poy aforoun th bash tha fygoyn apo ayto to arxeio giati tha ginei xamos apo ton kwdika poy tha
//xreiastei na grapsoyme edw.
//epishs oi entoles me tis opoies xeirizomai th bash dedomenwn tha allaksoyn mallon giati mpoeoyme na xrhsimopoihsoume to 
//paketo mongoose poy kanei th zwh mas eykoloterh kai ton kwdika omorfotero



//afth h synarthsh ftiaxnei ena collection, to 'dogs' kai prosthetei mesa kapoia... dogs.
//einai para poly kakogrammenh kai  ksekathara gia testing apla deixnw pws mporei to Vue app na parei dedomena apo thn bash me th bohtheia toy server

async function getDogsCollection() {
    await client.connect();
    
    //select Database
    //yparxoyn diafores baseis dedomenwn otan egkatasteisete to mongo 
    //apla lew oti h bash dedomenwn pou thelw na xrhsimopoihsei einai h "test"
    const db = client.db('test');

    //create a Collection called "dogs"
    const collection = db.collection('dogs')
    return collection;


    //add some dogs to the Database
    //to egrapsa mia fora apla gia na deiksw pws bazoume dedomena sth bash
    //to afhnw gia na to deite alla mhn to bgalete apo comment giati apla tha prosthetei kathe fora poy trexei o server 
    //ama thelete na mpoun ayta ta skylia sth dikh sas bash dedomenwn bgalte ta comments, trexte ton server kai ksanabalte ta

    /* collection.insertMany([{name: 'Togo'}, {name: 'Syd'}], (err, result) => {
      
    });
    */

}


//ayto h synarthsh epistrefei ena array me oti exei mesa h bash dedomenwn se ena url to /api/dogs (ginetai pio katw)
//to array to pairnei to Vue app sto arxeio User.vue kai to ektypwnei


app.get('/api/dogs', async (req,res) => {
  
  //bale sto dogCollection ayto pou tha sou epistrepsei h synarthsh getDogsColletion() (pio panw)
  const dogCollection = await getDogsCollection();

  //bale sto antikeimeno "dogs" opoio dog (p.x. Togo, Syd) periexei mesa to collection dogs (pou mas exei dwsei h synarthsh getDogsColletion)
  const dogs = dogCollection.find();

  //twra balta ola ayta se enan pinaka dogsArray kai telos send, steilton sto url: /api/dogs 
  //ama thelete mpeite sto url http://localhost:3000/api/dogs kai deite ti periexei
  
  dogs.toArray((err, dogsArray) => {
    res.send(dogsArray);
    console.log(dogsArray);
  });


}); 



//mallon tha to diagrapsw alla tha dw prwta an den exei spasei kati 

/* app.get('/', (req,res) => {
    res.sendFile('../router-test/build/index.html', {root: __dirname});
  }); 
*/



// theloume na poume sto express oti yparxei o fakelos dist, dhladh o fakelos pou xtisame me build sto vue
app.use(express.static('../router-test/dist', {root: __dirname}));

//to /* symbolizei oti se opoio url kai na briskesai steile to index.html
//opote to express ama dei p.x. to url locahost:3000/user tha steilei pali to index.html

app.get('/*', (req,res) => {
  res.sendFile('/index.html', {root: `${__dirname}/../router-test/dist/`});
});



//listen for requests
app.listen(3000);



