import React, { createContext, useContext } from 'react';
import initialState, { State } from '@context/initialState';
import { Action } from './reducer';

export interface ContextHook {
    state: State,
    dispatch: (action: Action) => any
};

const Context = createContext(initialState as any);

export const contextReducer = () => useContext(Context) as ContextHook;
export default Context;