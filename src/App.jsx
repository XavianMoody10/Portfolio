import { AboutSection } from "./layouts/AboutSection/AboutSection";
import { Header } from "./layouts/Header";
import { LandingSection } from "./layouts/LandingSection/LandingSection";
import { Main } from "./layouts/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <LandingSection />
        <AboutSection />
      </Main>
    </>
  );
};
export default App;
