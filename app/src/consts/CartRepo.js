export default class CartRepo {
    static cart=CartRepo.cart==null? new CartRepo(): CartRepo.cart
    
     products=[];
     getAllProducts(
        
    ){return this.products}
    addProduct(product){
        // (product={id,quantity})
        this.products.push(product)
    }
    removeProduct(productIndex){
        this.products.remove(productIndex)
    }
    addQuantity(index,quantity){
        this.products[index].quantity=this.products[index].quantity+quantity
    }   
    removeQuantity(index,quantity){
        
    } 
}

import React from 'react'
import { View, Text } from 'react-native'

const CartRepo = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default CartRepo
