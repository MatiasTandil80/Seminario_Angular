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

 articles: Article[] = []; /*[
    {
      name: 'Durazno',
      type: 'Natural',
      price: 500,
      stock: 10,
      image: 'assets/img/lata-durazno.jpg',
      clearance: false,
      quantity: 0,
    },
    {
      name: "Leche Entera",
      type: "Leche entera pasteurizada de 1 litro",
      price: 120,
      stock: 15,
      image: "assets/img/leche-entera.avif",
      clearance: true,
      quantity: 0,
    },
    {
      name: "Pan Integral",
      type: "Pan de molde integral con semillas, 500g",
      price: 250,
      stock: 8,
      image: "assets/img/pan-integral.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      name: "Huevos",
      type: "Docena de huevos",
      price: 340,
      stock: 0,
      image: "assets/img/huevos.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      name: "Pollo Fresco",
      type: "Pollo entero fresco, 1.5 kg",
      price: 750,
      stock: 0,
      image: "assets/img/pollo-fresco.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      name: "Café Molido",
      type: "Café molido 100% arábica, paquete de 250g",
      price: 480,
      stock: 3,
      image: "assets/img/cafe-molido.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      name: "Queso Cheddar",
      type: "Queso cheddar madurado, 200g",
      price: 375,
      stock: 9,
      image: "assets/img/queso-cheddar.jpg",
      clearance: false,
      quantity: 0,
    }
  ];*/



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

