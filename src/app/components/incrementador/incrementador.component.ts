import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

 @ViewChild('txtProgress') txtProgress:ElementRef;
 @Input('nombre') leyenda: string= 'leyenda'; //al pasar el nombre dentro del input, esto hace que en el componente progres en vez de leyenda puedo poner nombre
 @Input() porcentaje: number=50;

 @Output() cambioValor:EventEmitter<number> = new EventEmitter(); // en los <> se pasa el tipo de dato en este caso un number, porque la variable porcentaje el tipo de dato nombrado


  constructor() { 
  console.log('leyenda',this.leyenda);
  console.log('progreso',this.porcentaje);
  }

  ngOnInit() {
    console.log('porcentaje',this.porcentaje)
  }

  onChange(newValue:number){

   //let elementhtml:any = document.getElementsByName('progreso')[0];
   //console.log(elementhtml.value);

    if(newValue>=100){
      this.porcentaje=100;
    }else if(newValue<=0){
      this.porcentaje=0;
    }else{
      this.porcentaje=newValue
    }
    
   // elementhtml.value=this.porcentaje; //
   this.txtProgress.nativeElement.value=this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }
  cambiarValor(valor)
  {
    if(this.porcentaje>=100 && valor>0){
      this.porcentaje=100;
      return;
    }
    if(this.porcentaje<=0 && valor <0){
      this.porcentaje=0;
      return 

    }
    this.porcentaje = this.porcentaje+valor;
    this.cambioValor.emit(this.porcentaje); //el valor numerico que tenga porcentaje es lo que se pasa x el output
    this.txtProgress.nativeElement.focus() 

  }

}
