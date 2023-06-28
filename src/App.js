import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Navigation, AddDish } from "components";
import theme from "utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navigation />
        <AddDish />
      </div>
    </ThemeProvider>
  );
}

export default App;
