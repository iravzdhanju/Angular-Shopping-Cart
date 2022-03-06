import { Component, OnInit } from '@angular/core';

import Ingredient from '../shared/models/ingredient.models';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('potato', 5),
    new Ingredient('tomato', 5),
  ];

  constructor() {}

  ngOnInit(): void {}
}
