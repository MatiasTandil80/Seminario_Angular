import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAboutComponent } from './article-about.component';

describe('ArticleAboutComponent', () => {
  let component: ArticleAboutComponent;
  let fixture: ComponentFixture<ArticleAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
