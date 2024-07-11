import { Component } from '@angular/core';
import { ArticleCartService } from '../article-cart.service';
import { Article } from '../articles-list/article';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$: Observable<Article[]>;
  constructor(private cart: ArticleCartService){
    this.cartList$ = cart.cartList.asObservable();
  }

}
