import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/Cart';

@Component({
  selector: 'home-page',
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  cartList: Cart[] = [];
  productList: Product[] = [];
  data: any = {};

  constructor(private _productService: ProductService, private _cartService: CartService) {
    _productService.getProduct().subscribe(
      data => {
        this.data = data;
        this.productList = data.json();
      }
    )
  }

  cartLength: number;
  addCart(product: Product) {
    const item = this.cartList.find(p => p.ProductId == product.productId);
    if (item != null) {
      item.ProductCount++;
    } else {
      this.cartList.push({
        'ProductId': product.productId,
        'ProductName': product.name,
        'ProductCount': 1
      });
    }

    this.cartLength = 0;
    for (let item of this.cartList) {
      this.cartLength += item.ProductCount;
      console.log(this.cartLength);
    };
    this._cartService.CartList = this.cartList;
  }
}