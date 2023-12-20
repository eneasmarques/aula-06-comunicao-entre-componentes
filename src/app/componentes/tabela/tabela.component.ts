import { Component, Input } from '@angular/core';
import { Aluno } from '../../modelo/Aluno';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabela',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela.component.html',
  styleUrl: './tabela.component.css',
})
export class TabelaComponent {
  @Input() alunos: Aluno[] = [];
}
