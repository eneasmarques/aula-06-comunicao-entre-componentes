import { Component } from '@angular/core';
import { Aluno } from '../../modelo/Aluno';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  alunos: Aluno[] = [
    {
      nome: 'Maria',
      nota1: 10,
      nota2: 8,
    },
    {
      nome: 'João',
      nota1: 5,
      nota2: 8,
    },
    {
      nome: 'Antonia',
      nota1: 10,
      nota2: 4,
    },
  ];
}
