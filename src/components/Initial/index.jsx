import icon_programation from "../../assets/icon_programation.png";
import Button from "../Button/index";

export default function Initial() {
  return (
    <>
      <div className="flex justify-around items-center h-screen bg-black_olive text-white">
        <div>
          <img src={icon_programation} alt="Ícone de programação" />
        </div>
        <div className="space-y-12">
          <h1 className="text-3xl">
            Olá, eu sou <span className="text-olivine">Gleison Ribeiro</span> !
          </h1>
          <p className="text-xl">
            Seja bem vindo(a) ao meu portfólio! <br />
            Você irá conhecer um pouco sobre mim e sobre os meus projetos.
          </p>
          <div>
            <p className="text-xl">Role a tela para baixo e saiba mais.</p>
          </div>
        </div>
      </div>
    </>
  );
}
