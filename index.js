import express from "express";
import {PORT , mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Product } from './Models/productModel.js';
import productRoutes from './Routes/productRoutes.js';


const app = express();

app.use(express.json());

app.get('/', (request,response)=>{
    return response.status(200).send('Welcome to store');
})

app.use('/products', productRoutes);

mongoose.connect(mongoDBURL)
.then(() => {
    console.log('Database succesfully connected');
    app.listen(PORT , ()=> {
        console.log('Server conncected');
    })
})
.catch((error) => {
    console.log(error);
});





