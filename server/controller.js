module.exports = {

    get: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.get_inventory()
          .then( inventory => res.status(200).send( inventory ) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        } );
    },

    post: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const {name, price, imgurl} = req.body;
    
        dbInstance.create_product([ name, price, imgurl ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        } );
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
    
        dbInstance.delete_product([ params.product_name ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
    }
}