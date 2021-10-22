import Characters from "./components/characters"

import {Provider} from "react-redux"
import generateStore from './redux/store';

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <Characters/>
    </Provider>
  );
}

export default App;
