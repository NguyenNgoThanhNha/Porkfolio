import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { EngineeringFocus } from "@/components/engineering-focus";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <EngineeringFocus />
      <Education />
      <Contact />
    </>
  );
}
