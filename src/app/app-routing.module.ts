import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketArticleComponent } from './market-article/market-article.component';
import { ArticleAboutComponent } from './article-about/article-about.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'articles',
    pathMatch:'full'
  },
  {
      path:'articles',
      component:MarketArticleComponent
  },
  {
    path:'about',
    component:ArticleAboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
