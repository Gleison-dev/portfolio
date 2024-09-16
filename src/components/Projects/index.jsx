import CardProject from "../CardProject";

export default function Projects() {
  return (
    <>
      <div className="flex justify-center text-white mt-20">
        <h1 className="text-3xl border-b-2 border-olivine">Projetos</h1>
      </div>
      <div className="flex justify-around items-center mt-20">
        <div>
          <CardProject
            title="Book Burst"
            description="O projeto tem como intuito fornecer livros gratuitos para leitores e ser uma plataforma onde escritores possam publicar suas obras
          gratuitamente"
            tools="Express, Sequelize, Postgres e React"
            link="https://github.com/Gleison-dev/Book-Burst"
          />
        </div>
        <div>
          <CardProject
            title="Biotech API"
            description="A api foi desenvolvida como back-end de um aplicativo também desenvolvido por mim com o intuito de
          auxiliar produtores de pequeno e médio porte."
            tools="Express, Sequelize e MySQL"
            link="https://github.com/Gleison-dev/biotech-api-v2"
          />
        </div>
        <div>
          <CardProject
            title="Api Chat"
            description="Projeto desenvolvido com o objetivo de reimaginar o app whatsapp tendo as principais funções do app."
            tools="Express, Sequelize e MySQL"
            link="https://github.com/Gleison-dev/apiChat"
          />
        </div>
      </div>
    </>
  );
}
