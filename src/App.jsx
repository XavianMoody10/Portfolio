import { SideNavigationProvider } from "./contexts/SideNavigationContext";
import { AboutSection } from "./layouts/AboutSection/AboutSection";
import { Footer } from "./layouts/Footer/Footer";
import { Header } from "./layouts/Header";
import { LandingSection } from "./layouts/LandingSection/LandingSection";
import { Main } from "./layouts/Main/Main";
import { ProjectsSection } from "./layouts/ProjectsSection/ProjectsSection";
import { SideNavigation } from "./layouts/SideNavigation/SideNavigation";

const App = () => {
  return (
    <>
      <SideNavigationProvider>
        <Header />
        <SideNavigation />
      </SideNavigationProvider>

      <Main>
        <LandingSection />
        <AboutSection />
        <ProjectsSection />
      </Main>

      <Footer />
    </>
  );
};
export default App;
