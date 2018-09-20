import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/Cart';

@Component({
    selector: 'cart',
    templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {
    cartList;
    constructor(private _cartService: CartService) { 
        this.cartList=_cartService.CartList;        
    }
    
    removeItem(item: Cart){
    let index = this._cartService.CartList.indexOf(item,0);
    this._cartService.CartList.splice(index, 1);
    this.cartList=this._cartService.CartList; 
    console.log(this.cartList)
    console.log(this._cartService.CartList)
    }

    updateItem(item: Cart){
        let index = this._cartService.CartList.indexOf(item,0);
        this._cartService.CartList.splice(index, 1);
        
        this._cartService.CartList.push(item);
        this.cartList=this._cartService.CartList; 
        console.log(this.cartList)
        console.log(this._cartService.CartList)
        }
    
    minus(item: Cart){
        item.ProductCount--;
    }

    plus(item: Cart){
        item.ProductCount++;
    }

    ngOnInit() { }
}