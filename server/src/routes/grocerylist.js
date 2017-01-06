import GroceryListController from '../controllers/grocerylist';

export default (GroceryList, router) => {

    const groceryListController = new GroceryListController(GroceryList);

    router
        .get("/", groceryListController.Get);    

    return router;
}