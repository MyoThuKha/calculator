import { Provider } from "react-redux";
import HomePage from "./screens/home";
import store from "./datas/store";

export default function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}
