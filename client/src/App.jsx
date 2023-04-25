import { Header } from "./components/Header/Header";
import { About } from "./sections/About/About";
import { Home } from "./sections/Home/Home";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
