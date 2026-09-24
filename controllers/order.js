import order from "../model/order.js";
export const uploadorders = async (req,res)=>{

    try {
        const orderdata = await order.find();

        res.status(200).json({
            message:' All view is ordered',
            userorder:orderdata
        })
        
    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            message:'not all view is ordered'
        })
        
    }
};


export const getorders= async (req,res)=>{
    try {
        const dataorder = req.body;
        const allorder = await order(dataorder);
        allorder.save();

        res.status(200).json({
            message:'all ordered  posted '
        })
        
    } catch (error) {
        console.log(error,message);

        res.status(500).json({
            message:'not ordered posted '
        })
        
    }
};


export const putorders= async (req,res)=>{
    try {
        const putid = await order.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )

        res.status(200).json({
            message:'all data is put',
            userput:putid
        })

    } catch (error) {
        console.log(error.message);

        res.status(500).json({
            message:'not all data is updated',
        })
        
    }
};


export const deleteorders= async(req,res)=>{
    try {
        const deleteid = await order.findByIdAndDelete(
            req.params.id,
        )

        res.status(200).json({
            message:'all data deleted ',
            userdelete:deleteid
        })
        
    } catch (error) {
        console.id(error.message);

        res.status(500).json({
            message:'not all data deleted '
        })
        
    }
};