import { GlobalStyles } from "./styles/global";
import { GlobalContainer } from "./styles/container";

export function App() {
  return (
    <div className="App">
        <GlobalContainer>
          <h1 className="title">Hello world!</h1>
          <h2 className="title">Subtitle</h2>
        </GlobalContainer>
      <GlobalStyles/>
    </div>
  );
}