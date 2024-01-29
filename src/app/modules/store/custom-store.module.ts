import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { TODO_FEATURE_KEY, todoReducer } from "./todo/todo.reducer";
import { TodoEffects } from "./todo/todo.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(todoReducer),
    StoreModule.forFeature(TODO_FEATURE_KEY, todoReducer),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [StoreModule, StoreDevtoolsModule, EffectsModule],
})
export class CustomStoreModule {}
