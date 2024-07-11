import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

import { FormsModule } from '@angular/forms';
import { ArticleAboutComponent } from './article-about/article-about.component';
import { MarketArticleComponent } from './market-article/market-article.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleAboutComponent,
    MarketArticleComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
