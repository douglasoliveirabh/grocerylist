import GroceryListController from '../controllers/grocerylist';

export default (GroceryList, router) => {

    const groceryListController = new GroceryListController(GroceryList);

    router
        .get("/", (req, res) => { 
        groceryListController
            .GetAll()
            .then(result => {
                res.json(result);
                res.statusCode = result.statusCode;
            })
            .catch(result => {
                res.error = result.error;
                res.statusCode = result.statusCode;
            })
    });    

    return router;
}