const messages = require("../DB models/messages")
// const universalFunctions=require("../utils/universalFunctions")
let services={
addMessages:async (data)=>{
    try{
        await messages.create(data);

    }catch(err){

    }
}
}
module.exports = services;