import Cat from 'types/cat'
import { Action, Reducer } from 'redux'
import * as update from 'immutability-helper'

export interface CatState {
  data: Cat[],
}

export const initialState: CatState = {
  // TODO: get via API
  data: [],
}

export enum CatActionTypes {
  Add = 'Cat.Add',
}

export interface CatAction extends Action {
  type    : CatActionTypes,
  payload : any,
}

export interface CatReducer<T> extends Reducer<T> {
  (State: CatState, Action: CatAction ): CatState
}

const catReducer: CatReducer<CatState> = (state: CatState = initialState, action: CatAction): CatState => {

  const { type } = action

  switch (type) {
    case CatActionTypes.Add:
      return update(state, { data: { $push: action.payload.cats } })
    default:
      return state
  }
}

export default catReducer
