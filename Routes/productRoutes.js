import express from 'express';
import { Product } from '../Models/productModel.js';

const router= express.Router();

router.post('/',async (request,response) => {
    try {
        const newProduct= {
            name: request.body.name,
            Description: request.body.Description,
            Price: request.body.Price,
            Category: request.body.Category,
        }

        const product= await Product.create(newProduct);
        return response.status(201).send(product);
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
        
    }
})

router.get('/' , async(request,response) =>{
    try {
        const products= await Product.find({});
        return response.status(200).json({
              data: products
        });
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

router.get('/:id' , async(request,response) =>{
    try {

        const {id} = request.params;
        const product= await Product.findById(id);
        return response.status(200).json(product);
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
})

router.put('/:id' , async (request,response) => {
    try {
        const {id}= request.params;

        const result= await Book.findByIdAndUpdate(id, request.body);

        if(!result){
            return response.status(404).send({message: 'Product not found'});
        }
        return response.status(200).send({message: 'Product updates succesfully'});

    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
        
    }
})

router.delete('/:id', async (request,response) => {
    try {
        const {id}= request.params;

        const result= await Product.findByIdAndDelete(id);
        if(!result){
            return response.status(404).send({message: 'Product not found'});
        }
        return response.status(200).send({message: 'Product deleted successfully'});
        
    } 
    catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
        
    }
})

export default router;