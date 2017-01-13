import BaseController from './baseController';


class GroceryListController extends BaseController {

    constructor(GroceryList) {
        super(GroceryList);        
        //this.GroceryList = GroceryList;
    }    

     /*GetAll(){        
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

    Create(newGroceryList){
        return this
                .GroceryList
                .create(newGroceryList)
                .then(result => defaultResponse(result, 201))
                .catch(error => errorResponse(error.message)); 
    }

    Update(id, updatedGroceryList){
        return this
                .GroceryList
                .update({_id : id}, updatedGroceryList)
                .then(result => defaultResponse(result, 201))
                .catch(error => errorResponse(error.message));        
    }*/
}

export default GroceryListController;