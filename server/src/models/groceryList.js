export default (mongoose, Schema) => {

    const User = mongoose.model('GroceryList', new Schema({ 
                                                id: Schema.Types.ObjectId, 
                                                name: String, 
                                                items: []
                                            }));                                            
    return User;
}