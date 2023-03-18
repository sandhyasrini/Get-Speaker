import React from 'react';
import Landing from './features/Landing/Landing';
import { store } from './store/store';
import { Provider } from 'react-redux'
function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Landing />
      </header>
    </div>
  );
}

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWrapper;
