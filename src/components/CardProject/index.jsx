import Button from "../Button/index";

export default function CardProject({ title, description, tools, link }) {
  return (
    <>
      <div className="flex flex-col text-center items-center bg-black_olive w-96 p-4 space-y-4 rounded-md text-white">
        <div>
            <h1 className="text-2xl">{title}</h1>
            <p className="mt-5 text-lg">{description}</p>
        </div>
        <div>
            <p className="mb-5 text-lg">Ferramentas utilizadas: {tools}</p>
            <a href={link}><Button text="Acessar repositório"/></a>
        </div>
      </div>
    </>
  );
}
