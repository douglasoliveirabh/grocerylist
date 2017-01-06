import errorResponse from './errorresponse';
import defaultResponse from './defaultresponse';


class GroceryListController {

    constructor(GroceryList) {
        this.GroceryList = GroceryList;
    }

    Get(req, res){

        const defaulGroceryList = [{
                id: 1,
                name: "grocery list default",
                items: []
        }];
        
        res.json(defaulGroceryList);
    }

    /*Get(req, res) { 
        groceryListController
            .GetAll()
            .then(result => {
               defaultResponse(result);
            })
            .catch(result => {
                errorResponse(error.message);
            })
    }*/


    GetAll(){
        //console.log(this);
        return this
                 .GroceryList
                 .find()
                 .then(result => defaultResponse(result))
                 .catch(error => errorResponse(error.message));        
    }

}


export default GroceryListController;