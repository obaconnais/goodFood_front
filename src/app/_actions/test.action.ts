import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';
import { IRecipe, IRecipes } from '../_interface/recipe';


export const AddRecipe = createAction(
  "[HomeMenu Component] AddRecipe",
  props<{allRecipe:IRecipes}>()
)

export const DeleteRecipe =  createAction(
  "[Cart Component] DeleteRecipe",
  props<{recipe:IRecipe}>()
)

export const DecrementRecipe =  createAction(
  "[Cart Component] DecrementRecipe",
  props<{recipe:IRecipe}>()
)
