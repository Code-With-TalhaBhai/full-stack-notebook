import mongoose from 'mongoose';

const mongoURI = "mongodb+srv://talha:talhamongo@cluster0.tld1q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


const connectToDb = ()=>{ 
    mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
})
}

export default connectToDb;