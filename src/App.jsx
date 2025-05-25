import { AboutSection } from "./layouts/AboutSection/AboutSection";
import { Header } from "./layouts/Header";
import { LandingSection } from "./layouts/LandingSection/LandingSection";
import { Main } from "./layouts/Main/Main";
import { ProjectsSection } from "./layouts/ProjectsSection/ProjectsSection";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <LandingSection />
        <AboutSection />
        <ProjectsSection />
      </Main>
    </>
  );
};
export default App;
