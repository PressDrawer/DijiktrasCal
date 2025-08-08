import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { CalculatorService } from './services/calculator.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  fromNode: string = '';
  toNode: string = '';
  result: { path: string[]; distance: number } | null = null;

  constructor(private calculatorService: CalculatorService) {}

  calculate() {
    if(this.fromNode&&this.toNode)
    {
    this.result = this.calculatorService.findShortestPath(this.fromNode, this.toNode);
    }
  }

  clear() {
    this.fromNode = '';
    this.toNode = '';
    this.result = null;
  }
}
/*


export class DijkstraComponent {
  nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  fromNode: string = 'A';
  toNode: string = 'G';
  result: { path: string[]; distance: number } | null = null;

  constructor(private dijkstraService: DijkstraService) {}

  calculate() {
    this.result = this.dijkstraService.findShortestPath(this.fromNode, this.toNode);
  }

  clear() {
    this.fromNode = '';
    this.toNode = '';
    this.result = null;
  }
}





*/