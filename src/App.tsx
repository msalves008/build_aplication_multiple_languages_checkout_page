import CheckoutPage from "./Pages/CheckoutPage";
import { GlobalStyles } from "./styles/global";
import "./i18n/index";

export function App() {
  return (
    <div className="App">
        <CheckoutPage />
      <GlobalStyles />
    </div>
  );
}
