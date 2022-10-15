import "./App.css";
import CardsSpace from "./components/cards-space/CardsSpace";
import Header from "./components/header/Header.jsx";

function App() {
  return <div className="App">
    <Header />
    Hello World
    <div className="container">
      <CardsSpace />
    </div>

  </div>;
}

export default App;
