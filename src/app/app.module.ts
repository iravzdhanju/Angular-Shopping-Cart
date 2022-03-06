import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './component/header/header.component';
import { RecipiesComponent } from './component/recipies/recipies.component';
import { RecipieListComponent } from './component/recipies/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './component/recipies/recipie-item/recipie-item.component';
import { RecipieDetailComponent } from './component/recipies/recipie-item/recipie-detail/recipie-detail.component';
import { ShoppingEditComponent } from './component/shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './component/shopping-list/shopping-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    RecipieListComponent,
    RecipieItemComponent,
    RecipieDetailComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
