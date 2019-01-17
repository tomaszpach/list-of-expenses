import * as React from 'react';
import { ExpensesMobX } from "./mobx/store";

const AppContext = React.createContext(new ExpensesMobX());

export const Provider = AppContext.Provider;

export class AppStateComponent<PropsType = {}> extends React.Component<PropsType> {
  static contextType = AppContext;

  get appState(): ExpensesMobX {
    //Fix for "any" type
    return this.context;
  }
}