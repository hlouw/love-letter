import { Pipe, PipeTransform } from '@angular/core';
import { Card } from "./card.enum";

@Pipe({
  name: 'cardName'
})
export class CardNamePipe implements PipeTransform {

  transform(value: Card, args?: any): string {
    switch (value) {
      case Card.Guard: return 'Guard';
      case Card.Priest: return 'Priest';
      case Card.Baron: return 'Baron';
      case Card.Handmaid: return 'Handmaid';
      case Card.Prince: return 'Prince';
      case Card.King: return 'King';
      case Card.Countess: return 'Countess';
      case Card.Princess: return 'Princess';
      default: return '';
    }
  }

}
