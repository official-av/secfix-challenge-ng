import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoEffects } from "./modules/store/todo/todo.effects";
import {
  TODO_FEATURE_KEY,
  todoReducer,
} from "./modules/store/todo/todo.reducer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    StoreModule.forRoot(todoReducer),
    EffectsModule.forRoot(),
    StoreModule.forFeature(TODO_FEATURE_KEY, todoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
