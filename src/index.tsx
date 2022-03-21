import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./Counter";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <h1>Welcome to Vite skeleton</h1>
        <Counter />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
