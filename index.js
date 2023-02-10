import express, { application } from 'express';
import connectToDb from './db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import auth from './routes/auth.js';
import note from './routes/note.js';

const app = express();
const PORT = 4000;
connectToDb();

app.get('/',(req,res)=>{
    res.send('Hello and Good Bye.');
});


// app.use('/api/auth',auth);
app.use(bodyParser.json( {extended:true} ));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api/auth',cors(),auth);
app.use('/api/note',cors(),note);

app.listen(PORT,()=>{
    console.log(`connection successfull on ${PORT}`);
})