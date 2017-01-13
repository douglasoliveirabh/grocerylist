import mongoose from 'mongoose';

describe("Integration Tests for Grocery List routes", () => {

    const GroceryList = app.datasource.models.GroceryList;
    const defaulGroceryList = {  
        _id : mongoose.Types.ObjectId(1),
        name: "grocery list default",
        items: []
    };
    
    beforeEach(done => {            
        GroceryList
            .remove({})
            .then(() => {                
                new GroceryList(defaulGroceryList).save();                
            })
            .then(() => {
                done();
            });
    });


    describe("GET /grocerylists", () => {
        it("Should return a list of grocery lists", done => {                        
            request
                .get("/grocerylists")
                .end((err, res) => {  

                    assert.ok(mongoose.Types.ObjectId(res.body[0]._id).equals(defaulGroceryList._id));                                      
                    expect(res.body[0].name).to.be.equal(defaulGroceryList.name);
                    expect(res.body[0].items.length).to.be.equal(defaulGroceryList.items.length);

                    done(err);
                });                                        
        });
    });
    
   describe("GET /grocerylists/:id", () => {
        it("Should return a grocerylist by id", done => {            
            request
                .get("/grocerylists/" + defaulGroceryList._id)                
                .end((err, res) => {                                                               
                    assert.ok(mongoose.Types.ObjectId(res.body._id).equals(defaulGroceryList._id));      
                    expect(res.body.name).to.be.equal(defaulGroceryList.name);
                    expect(res.body.items.length).to.be.equal(defaulGroceryList.items.length);            

                    done(err);
                });                               
        });
    });

    describe("POST /grocerylists" , () => {
        it("Should create a grocery list", done => {

            const newGroceryList = {  
                    _id : mongoose.Types.ObjectId(2),
                    name: "grocery list default",
                    items: []
                };

            request
                .post("/grocerylists/")
                .send(newGroceryList)
                .end((err, res) => {  
                    //console.log("created id: " + res.body._id);
                    //console.log("newGroceryList id: " + newGroceryList._id);
                    //assert.ok(mongoose.Types.ObjectId(res.body._id).equals(newGroceryList._id));                
                    expect(res.body.name).to.be.equal(newGroceryList.name);
                    expect(res.body.items.length).to.be.equal(newGroceryList.items.length);            

                    done(err);
                });


        });
    });

    describe("PUT grocerylists/:id" , () => {
        it("Update a grocery list", done => {

            const updatedGroceryList = {
                name: "updated grocery list",
                items: []
            };

            request
                .put("/grocerylists/" + defaulGroceryList._id)
                .send(updatedGroceryList)
                .end((err, res) => {                         
                    expect(res.body.nModified).to.be.equal(1);
                    expect(res.body.ok).to.be.equal(1);                
                    done(err);
                });


        });
    });

});