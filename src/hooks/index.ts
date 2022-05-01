import React, { Reducer } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createTodo } from '../../src/graphql/mutations';
import { IPayload, AsyncAction, TActionReducer, TAction, State, ReducerState } from './types';
import { AsyncActionHandlers } from 'use-reducer-async';

export const Dispatch = React.createContext('Dispatch');

export const initialState:ReducerState = {
    loading: false,
  };

export function appReducer(state:ReducerState, action:TAction) {
    //console.log('reducer', state, action)
    switch (action.type) {
  
      case 'loading': {
        return {
          ...state,
          loading: action.payload
        }
      }
    }
}


export const asyncActionHandlers: AsyncActionHandlers<Reducer<State, TActionReducer>, AsyncAction> = {
    SET_TODO: ({ dispatch }) => async (action:IPayload) => {
      dispatch({ type: 'loading', payload: true  });
      const {name, description} = action.payload;

      try {
        const response = await API.graphql(graphqlOperation(createTodo, {
          input: {
            name,
            description,
          }
        }))
        console.log('Response \n');
        console.log(response);
      }catch(e: any){
        console.log('Error', e.message);
      }
      dispatch({ type: 'loading', payload: false });
    },
    GET_USER: ({ dispatch }) => async () => {
        dispatch({ type: 'loading', payload: true  });
        const user = await Auth.currentAuthenticatedUser();
        console.log(`Credencials USER:${user.attributes.email} ID:${user.attributes.sub}`)
        dispatch({ type: 'loading', payload: false });
      },
};