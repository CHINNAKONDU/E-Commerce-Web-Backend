import cart from "../model/cart.js";
  export const uploadcarts =  async (req,res)=>{
       
       try{ 
        const cartdata = await cart.find();
        res.status(200).json({message:'all cart is viewed',
            userdcart:cartdata})

       }catch(error) {
        console.log(error.message);
        res.status(500).json({message :'cart is not viewed all data '})

       }
    }

 export const getcarts =  async (req,res)=>{
        try {
            const cartdata = req.body;
            const allcart = await cart(cartdata)
            allcart.save();

            res.status(200).json({message:'allcart data is posted', 
                usercart:cartdata})
            
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message:'not posted data in allcart'})
            
        }
    }

   export const putcarts = async (req,res)=>{
        try {
            const cartid = await cart.findByIdAndUpdate(
                req.params.id,
                req.body,
                {new:true}
            );
            res.status(200).json({message:'all cart updated ', userpost:cartid})
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'all cart not updated'})
            
        }
    }


    export const deletecarts =  async (req,res)=>{
        try {
            const cartid = await cart.findByIdAndDelete(
                req.params.id,
                
            );
            res.status(200).json({message:'all cart deleted ', userpost:cartid})
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'all cart not deleted'})
            
        }
    };