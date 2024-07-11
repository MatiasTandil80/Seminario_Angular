import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../articles-list/article';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit{

  @Input()
  quantity:number;

  @Input()
  max:number;

  @Output()
  quantityChange:EventEmitter<number>

  @Output()
  maxReached:EventEmitter<string>


  constructor(){
    this.max = 0;
    this.quantity = 0;
    this.quantityChange = new EventEmitter<number>();
    this.maxReached = new EventEmitter<string>();
    //Necesito inicializarlas, caso contrario dan error...
  }

  ngOnInit(): void {
    
  }

  upQuantity():void{
    if(this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("Se alcanzó el máximo de artículos");
    }
  }

  downQuantity():void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: KeyboardEvent): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);
    
  }

}
