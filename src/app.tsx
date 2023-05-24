import { Provider } from "react-redux";
import Header from "./Components/header/header";
import store, { persistor } from "./store";
import { Outlet } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<h1>loading...</h1>} persistor={persistor}>
        <Header />
        <Outlet />
      </PersistGate>
    </Provider>
  );
}

export default App;
