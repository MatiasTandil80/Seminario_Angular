import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketArticleComponent } from './market-article.component';

describe('MarketArticleComponent', () => {
  let component: MarketArticleComponent;
  let fixture: ComponentFixture<MarketArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
