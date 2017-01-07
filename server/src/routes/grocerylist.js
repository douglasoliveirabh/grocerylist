import GroceryListController from '../controllers/grocerylist';

export default (GroceryList, router) => {

    const groceryListController = new GroceryListController(GroceryList);

    router        
        .get("/:id", (req, res) => { 
            groceryListController
                .GetById(req.params.id)
                .then(result => {                    
                    res.json(result.data);
                    res.status(result.status);  
                    res.end();                 
                })
                .catch(result => {
                    res.status(result.status);                    
                })
        })

        .get("/", (req, res) => { 
            groceryListController
                .GetAll()
                .then(result => {
                    res.json(result.data);
                    res.status(result.status);
                })
                .catch(result => {
                    res.status(result.status);                    
                })
        });
            

    return router;
}