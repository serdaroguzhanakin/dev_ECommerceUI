import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

@Injectable()
export class CartService {
    CartList:Cart[];
    

    constructor() { 

    }
}