import errorResponse from './errorresponse';
import defaultResponse from './defaultresponse';


class GroceryListController {

    constructor(GroceryList) {
        this.GroceryList = GroceryList;
    }

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