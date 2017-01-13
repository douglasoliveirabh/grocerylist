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
                })
                .catch(result => {
                    res.status(result.status);
                });
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
                });
        })
        .post("/", (req, res) => {
            groceryListController
                .Create(req.body)
                .then(result => {
                    res.json(result.data);
                    res.status(result.status);
                })
                .catch(result => {
                    res.status(result.status);
                });
        })
        .put("/:id", (req, res) => {
            groceryListController
                .Update(req.params.id, req.body)
                .then(result => {
                    res.json(result.data);
                    res.status(result.status);
                })
                .catch(result => {
                    res.status(result.status);
                });
        });


    return router;
}