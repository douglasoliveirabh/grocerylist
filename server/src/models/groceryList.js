export default (mongoose, Schema) => {

    const User = mongoose.model('GroceryList', new Schema({                                                 
                                                name: String, 
                                                items: []
                                            }));                                            
    return User;
}