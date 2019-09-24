import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  @Input() doughnutChartLabels : string[] =[]; 
  @Input() doughnutChartData : number [] = [];
  @Input() doughnutChartType: string ='doughnut'

  constructor() { }

  ngOnInit() {
  }

}
