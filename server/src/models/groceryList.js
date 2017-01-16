import GroceryListItem from './groceryListItem';

export default (mongoose, Schema) => {

    const GroceryList = mongoose.model('GroceryList', new Schema({                                                 
                                                name: String, 
                                                items: [GroceryListItem]
                                            }));                                            
    return GroceryList;
}