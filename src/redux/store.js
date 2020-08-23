import { createStore } from 'redux';
import {todo} from "./reducer";

export const store = createStore(
  todo
);


