import Icons from "../Icons/index";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

export default function Contacts() {
  return (
    <>
      <div className="flex justify-center mt-32">
        <h1 className="text-3xl text-white border-b-2 border-olivine">Contatos</h1>
      </div>
      <div className="flex justify-evenly mt-32 bg-mindaro p-10">
        <a href="mailto:gleisonrgomes@gmail.com">
          {" "}
          <Icons image={gmail} alt="Ícone do Gmail" />{" "}
        </a>
        <a href="https://www.linkedin.com/in/gleison-ribeiro-dev/">
          {" "}
          <Icons image={linkedin} alt="Ícone do Linkedin" />{" "}
        </a>
        <a href="https://github.com/Gleison-dev">
          <Icons image={github} alt="Ícone do GitHub" />
        </a>
      </div>
    </>
  );
}
