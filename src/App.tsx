import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OtherWork } from "./components/OtherWork";
import { RealsProject } from "./components/RealsProject";
import { TechnicalProfile } from "./components/TechnicalProfile";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <TechnicalProfile />
        <RealsProject />
        <OtherWork />
        <Contact />
      </main>
    </>
  );
}
