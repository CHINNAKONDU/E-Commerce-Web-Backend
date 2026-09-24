import product from "../model/products.js";


export const uploadProducts = async (req,res)=>{
    const allproduct = req.body;

    try {
        const userdata = await product(allproduct);
        userdata.save();

        res.status(200).json({
            message:'data is inserted',
            Userdata:allproduct
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message
        });
    }
}


export const getProducts = async (req,res)=>{
    try {
        const products = await product.find();

        res.status(200).json({
            message:'show all products',
            data:products
        });

    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            message:'products not found'
        });
    }
}


export const putproducts = async (req,res)=>{
    try {
        const productdata = await product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        res.status(200).json({
            message:'update id products',
            data:productdata
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message:'not update id products'
        });
    }
}


export const deleteproducts = async (req,res)=>{
    try {
        const productdata = await product.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({
            message:'Product deleted successfully',
            data:productdata
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message:'Product not deleted'
        });
    }
};