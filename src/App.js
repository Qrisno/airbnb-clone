import Header from "./components/Header/Header";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card
        inStock="./assets/images/guy.svg"
        img="Fluffykins"
        rating="4.2"
        views="20"
        title="nini"
        price="100"
      ></Card>
    </div>
  );
}

export default App;
