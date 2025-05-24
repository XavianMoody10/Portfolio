import { Header } from "./layouts/Header";
import { LandingSection } from "./layouts/LandingSection/LandingSection";

const App = () => {
  return (
    <>
      <Header />

      <main className=" w-[90%] mx-auto">
        <LandingSection />
      </main>
    </>
  );
};
export default App;
