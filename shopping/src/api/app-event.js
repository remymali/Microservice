const ShoppingService = require("../services/shopping-service");

module.exports = (app) => {
    
    const service = new ShoppingService();

    app.use('/app-event',async (req,res,next) => {

        const { payload } = req.body;
        console.log("============= Shopping service recieved event ================");
        
        console.log(payload);

         //handle subscribe events
         service.SubscribeEvents(payload);
         
       return res.status(200).json(payload);

    });

}
