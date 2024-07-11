import { Component } from '@angular/core';
import { Article } from './article';
import { ArticleCartService } from '../article-cart.service';
import { ArticleDataService } from '../article-data.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})

export class ArticlesListComponent {

 articles: Article[] = []; 

  constructor(private cart: ArticleCartService,
              private articleDataService: ArticleDataService){
  
  }

  ngOnInit():void{
    this.articleDataService.getAll()
    .subscribe(articles => this.articles = articles);

  }

  addToCart(art:Article):void{
    this.cart.addToCart(art);
    art.stock-= art.quantity;
    art.quantity=0;
  }


  maxReached(msn:string){
    alert(msn);
  }


}

