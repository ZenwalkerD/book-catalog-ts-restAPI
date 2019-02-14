import mongoose, { mongo } from 'mongoose';

const uri: string = "mongodb://127.0.0.1:1111/local";

mongoose.connect(uri, (error : any)=> {
    console.log(error)
});

export const BookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true}
});

const book = mongoose.model("Book",BookSchema);

export default book;