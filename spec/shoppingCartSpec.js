describe("shoppingCart", () => {

    it("Should add an item to the shopping cart", () => {
        const shoppingCart = new Cart();

        shoppingCart.scan(4)
        expect(shoppingCart.items()).toEqual([4])
    
        shoppingCart.scan(5)
        expect(shoppingCart.items()).toEqual([4, 5])
      })

      it("Should only add 5 items to the constructor", () => {
        const shoppingCart = new Cart([1,2,3,4,5,6]);
    
        expect(shoppingCart.items()).toEqual([1,2,3,4,5])
      })

      it("should show cart is full", () => {
        const shoppingCart = new Cart();
        shoppingCart.scan(1)
        shoppingCart.scan(2)
        shoppingCart.scan(3)
        shoppingCart.scan(4)
        shoppingCart.scan(5)
   
    
        expect(cart.scan(6)).toBe("Your cart is full.")
      })
