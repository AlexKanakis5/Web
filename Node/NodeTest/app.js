const express = require("express");
//Node.js body parsing middleware.
const bodyParser = require("body-parser");
//Connect/Express middleware 
const cors = require("cors");





const app = express();

// theloume na poume sto express oti yparxei o fakelos dist, dhladh o fakelos pou xtisame me build sto vue
app.use(express.static('../router-test/dist', {root: __dirname}));


app.get('/', (req,res) => {
    res.sendFile('../router-test/build/index.html', {root: __dirname});
  }); 
app.get('/',(req,res)=>{
    res.send('<p>homeaaaa</p>');
});
//listen for requests
app.listen(3000);
