const {response} = require("express");

const Item = require("../models/items-model");

const getItems = async(req, res= response)=>{

    const items = await Item.find()
    
    res.json({
        ok: true,
        items,
    })
}

 const createItem = async (req, res= response) =>{

    const item = new Item(req.body)
    try{
        const savedItem = await Item.save();
        
        res.json({
            ok: true,
            items: savedItem
        });
    }catch(error){
        res.status(500).json({
            ok:false,
            msg:"Unable to create Item duplicate ID."
        })
    }
}

//  const updateItem = async (req, res= response) =>{
    
//     const itemId = req.body.id;

//     try{
//         const item = await Item.findById(itemId)    
    
//         if(!item){
//             return res.status(404).json({
//                 ok: false,
//                 msg: "Id doesn't exist"
//             })
//         }
        
//         const newItem = {
//             ...req.body,
//         }

//         const updatedItem = await Item.findByIdAndUpdate(itemId, newItem, {new:true});

//         res.json({
//             ok: true,
//             item: updateItem,
//         })
    
    
//     }catch(error){
//         res.status(500).json({
//             ok:false,
//             msg: "Unable to update wrong id."
//         })
//     }
// }

//  const deleteItem = async (req, res= response) =>{
    

//     const itemId = req.body.id;

//     try{
//         const item = await Item.findById(itemId)    
    
//         if(!item){
//             return res.status(404).json({
//                 ok: false,
//                 msg: "Id doesn't exist"
//             })
//         }
        
//         const newItem = {
//             ...req.body,
//         }

//         const updatedItem = await Item.findByIdAndDelete(itemId, newItem, {new:true});

//         res.json({
//             ok: true,
//             item: updateItem,
//         })
    
    
//     }catch(error){
//         res.status(500).json({
//             ok:false,
//             msg: "Unable to update wrong id."
//         })
//     }
// };

module.exports ={
    getItems,
    // createItem,
    // updateItem,
    // deleteItem,
}