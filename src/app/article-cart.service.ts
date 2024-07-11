import { Injectable } from '@angular/core';
import { Article } from './articles-list/article';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Logica del Carrito
 * 
 */
@Injectable({
  providedIn: 'root'
})

export class ArticleCartService {

  private _carList: Article[]=[];
  cartList: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);

  constructor() { 
  }

  addToCart(art: Article) {
    let item: Article | undefined = this._carList.find((v1)=>v1.name==art.name);
    //sin el undefined, la declaración de la variable item me arroja un error
    if(!item){
      this._carList.push({... art});  
    }else{
      item.quantity+= art.quantity;
    }
    
    console.log(this._carList);
    this.cartList.next(this._carList); //similar al emitt
  }

  
}
