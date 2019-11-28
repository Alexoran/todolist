import React from 'react';
import { Provider } from 'react-redux'

import { store } from './configStore';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Todo from "./components/Todo/Todo"
import Comments from "./components/Comments/Comments"


function App() {
    return (
      <Provider store={store}>
        <div className="App">
            <Navbar />
            <Todo />
            <Comments/>
        </div>
      </Provider>
  );
}

export default App;
