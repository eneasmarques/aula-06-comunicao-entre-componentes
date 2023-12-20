import { Pipe, PipeTransform } from '@angular/core';
import { Aluno } from '../modelo/Aluno';

@Pipe({
  name: 'media',
  standalone: true,
})
export class MediaPipe implements PipeTransform {
  transform(obj: Aluno): number {
    const nota1: number = obj.nota1 || 0;
    const nota2: number = obj.nota2 || 0;

    const media: number = (nota1 + nota2) / 2;
    return media;
  }
}
