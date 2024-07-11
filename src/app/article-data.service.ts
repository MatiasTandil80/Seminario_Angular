import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Article } from './articles-list/article';

const URL = 'https://668f62f980b313ba0917ea2d.mockapi.io/api/articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(URL)
    .pipe(
      tap( (articles: Article[]) => articles.forEach(article => article.quantity = 0))

    );
  }

}
