// const ProductService = require("../services/product-service");

module.exports = (app) => {
    
    // const service = new ProductService();
    app.use('/app-event',async (req,res,next) => {

        const { payload } = req.body;

        //handle subscribe events
        // service.SubscribeEvents(payload);

        console.log("============= product service recieved events ================");
        return res.status(200).json(payload)

    });

}
