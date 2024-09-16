import AboutMe from "../../components/AboutMe";
import Header from "../../components/Header";
import Initial from "../../components/Initial";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Initial />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Projects />
      </section>
    </>
  );
}
