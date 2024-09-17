import AboutMe from "../../components/AboutMe";
import Contacts from "../../components/Contacts";
import Header from "../../components/Header";
import Initial from "../../components/Initial";
import Knowledge from "../../components/Knowledge";
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
      <section>
        <Knowledge />
      </section>
      <section>
        <Contacts />
      </section>
    </>
  );
}
