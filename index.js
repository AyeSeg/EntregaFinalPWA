const express = require("express");
const mongoose = require("mongoose");
const body_parser = require('body-parser');
const cocktailRoutes = require("./src/routes/cocktail");


const app = express();
const port = 4000;

app.use('/api', cocktailRoutes);
app.use(express.json());

app.get('/', (req, res) => {
    res.send ("Bienvenida Aye");
});

mongoose.connect("mongodb+srv://AyePWI:admin1234@cluster0.rzhk1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => console.log('Conectada a MongoDB Atlas'))
.catch((error) => console.log(error));

app.listen(port, () => {
   console.log(`Servidor corriendo en puerto ${port}`);
});

//app.listen(PORT, () => {
//  console.log(`Servidor corriendo en puerto ${PORT}`);
//});
