import category from "../model/category.js";

export const uploadcategory = async(req,res)=>{
        try {
            const data = req.body;
            const alldata = await category(data)
            alldata.save();
            res.status(200).json({message:'category is added ',datauser:data})
            
        } catch (error) {
            console.log(error);
            res.status(500).json({message:'not added in category part'})
        }
    }

    export const getcategory =async (req,res)=>{
            try {
                const allcat = await category.find();
                res.status(200).json({message:'all category parts is visable', userdata2:allcat})
                
            } catch (error) {
    
                console.log(error);
                res.status(500).json({message:'not showing category'});
                
            }
        };
         export const putcategory =  async(req,res)=>{
                 try {
                     const iddata = await category.findByIdAndUpdate(
                         req.params.id,
                         req.body,
                         {new:true},
                     );
                      res.status(200).json({message:'data is updated category'})
                     
                 } catch (error) {
                     console.log(error.message)
                     res.status(500).json({message:'data is not updated'})
                     
                 }
             };

              export const deletecategory = async(req,res)=>{
                      try {
                          const iddata = await category.findByIdAndDelete(
                              req.params.id,
              
                          );
                           res.status(200).json({message:'data is deleted category'})
              
                          
                      } catch (error) {
                          console.log(error.message)
                          res.status(500).json({message:'data is not deleted'})
                          
                      }
                  };


