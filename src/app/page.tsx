import { Footer, Main } from "@/app/component/Layouts";
import { Hero } from "@/app/component/Hero";
import { About } from "@/app/component/About";
import { Landscape } from "@/app/component/Landscape";
import { Archive } from "@/app/component/Archive";
import { Services } from "@/app/component/Services";

export default function Home() {
  return (
    <Main>
      <Hero />
      <About />
      <Landscape />
      <Archive />
      <Services />
      <Footer />
    </Main>
  );
}
