import { useState } from "react";
import { Header } from "./features/Header/Header";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";
import { Hero } from "./sections/Hero/Hero";
import { Projects } from "./sections/Projects/Projects";

function App() {
  const [section, setSection] = useState([0, 0]);

  return (
    <div className="App">
      <Header setSection={setSection} section={section}></Header>
      <Hero setSection={setSection}></Hero>
      <About setSection={setSection}></About>
      <Projects setSection={setSection}></Projects>
      <Contact setSection={setSection}></Contact>
    </div>
  );
}

export default App;
