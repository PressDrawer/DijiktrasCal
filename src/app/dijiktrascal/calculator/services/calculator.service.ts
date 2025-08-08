import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  private graph: { [key: string]: { [key: string]: number } } = {
    A: { B: 1, C: 4 },
    B: { A: 1, C: 2, D: 5 },
    C: { A: 4, B: 2, D: 1 },
    D: { B: 5, C: 1, E: 3 },
    E: { D: 3, F: 1 },
    F: { E: 1, G: 2 },
    G: { F: 2 }
  };

  
  findShortestPath(start: string, end: string): { path: string[]; distance: number } {
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const queue: string[] = [];

    for (const node in this.graph) {
      distances[node] = node === start ? 0 : Infinity;
      previous[node] = null;
      queue.push(node);
    }

    while (queue.length) {
      queue.sort((a, b) => distances[a] - distances[b]);
      const current = queue.shift()!;
      if (current === end) break;

      for (const neighbor in this.graph[current]) {
        const alt = distances[current] + this.graph[current][neighbor];
        if (alt < distances[neighbor]) {
          distances[neighbor] = alt;
          previous[neighbor] = current;
        }
      }
    }

    const path = [];
    let current = end;
    while (current) {
      path.unshift(current);
      current = previous[current]!;
    }

    return { path, distance: distances[end] };
  }
}
