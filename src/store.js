import { createStore } from 'redux';
import Reducer from './reducer';

const store= createStore(Reducer,
// inyectamos la capacidad de usar Redux Dev Tools
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);

export default store;
