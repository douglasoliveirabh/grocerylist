export default (mongoose, Schema) => {

    const GroceryListItem = mongoose.model('GroceryListItem', new Schema({                                                 
                                               name: String, 
                                               description: String,
                                               Quantity: Number,
                                               Price: Number                                               
                                            }));                                            
    return GroceryListItem;
}