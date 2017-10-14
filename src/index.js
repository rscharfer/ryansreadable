import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { fetchPosts } from './actions'
import rootReducer from './reducers'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers/reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  rootReducer,{
  selectedView:"",
  sortTypeComments:"",
  sortTypePosts:"",
  entities:{posts:{},comments:{}},
  postsByCategory:{
  	react:[],
  	redux:[],
  	udacity:[]
  }

},
  composeWithDevTools(applyMiddleware(
    thunkMiddleware
  ))
  
)

ReactDOM.render(
	<BrowserRouter>
	<Provider store={store}>

	<App />

</Provider>
</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
//store.dispatch(selectCateory('reactjs'))
store
  .dispatch(fetchPosts('reactjs'))
  .then(() => console.log(store.getState()))


