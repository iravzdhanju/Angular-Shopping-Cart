import { Component, OnInit } from '@angular/core';

import Recipie from '../models/recipie.model';
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.scss'],
})
export class RecipieListComponent implements OnInit {
  recipes: Recipie[] = [
    new Recipie(
      'Test Recipie',
      'This is a test recipie',
      'https://pinchofyum.com/wp-content/uploads/Homemade-Tomato-Soup-Square.png'
    ),
    new Recipie(
      'Test Recipie',
      'This is a test recipie',
      'https://pinchofyum.com/wp-content/uploads/Homemade-Tomato-Soup-Square.png'
    ),
    new Recipie(
      'Test Recipie',
      'This is a test recipie',
      'https://pinchofyum.com/wp-content/uploads/Homemade-Tomato-Soup-Square.png'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
