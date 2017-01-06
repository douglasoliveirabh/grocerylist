describe("Integration Tests for Grocery List routes", () => {
    const defaulGroceryList = {
        id: 1,
        name: "grocery list default",
        items: []
    }   

    describe("GET /grocerylists", () => {
        it("Should return a list of grocery lists", done => {            
            request
                .get("/grocerylists")
                .end((err, res) => {
                    expect(res.body[0].id).to.be.equal(defaulGroceryList.id);
                    expect(res.body[0].name).to.be.equal(defaulGroceryList.name);
                    expect(res.body[0].items.length).to.be.equal(defaulGroceryList.items.length);

                    done(err);
                })


        });
    });

});