import AboutMe from "../../components/AboutMe";
import Contacts from "../../components/Contacts";
import Initial from "../../components/Initial";
import Knowledge from "../../components/Knowledge";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <>
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
