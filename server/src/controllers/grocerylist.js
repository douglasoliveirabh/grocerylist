import errorResponse from './errorresponse';
import defaultResponse from './defaultresponse';
import mongoose from 'mongoose';


class GroceryListController {

    constructor(GroceryList) {
        this.GroceryList = GroceryList;
    }    

     GetAll(){        
        return this
                 .GroceryList
                 .find()
                 .then(result => defaultResponse(result))
                 .catch(error => errorResponse(error.message));        
     }
 
    GetById(id){            
        return this
                .GroceryList
                .findById(id)
                .then(result => defaultResponse(result))
                .catch(error => errorResponse(error.message));                    
    }
    

}


export default GroceryListController;