export interface IPayload {
    payload:any
}

export type AsyncAction = any;
export type State = any;

export type TActionReducer =
  | { type: 'SET_TODO' }
  | { type: 'GET_USER' };

export type ReducerState = {
    loading:Boolean
}

export type TAction = {
    payload:any,
    type:String
}
