export default function AboutMe() {
  return (
    <>
      <div className="flex justify-center bg-erie_black text-white mt-32">
        <h1 className="text-3xl border-b-2 border-olivine">Sobre Mim</h1>
      </div>
      <div className="flex justify-around items-center bg-erie_black text-white mt-14">
        <div className="space-y-4 text-lg">
          <p> <span className="text-olivine">Nome: </span>Gleison Ribeiro Gomes</p>
          <p> <span className="text-olivine">Idade: </span>17</p>
          <p> <span className="text-olivine">Residência: </span>Bom Jesus da Lapa - Bahia</p>
          <p> <span className="text-olivine">Instituição de Ensino: </span>Programadores do Amanhã</p>
          <p> <span className="text-olivine">Hobbies: </span>Basquete e tecnologia</p>
        </div>
        <div>
          <p className="space-y-2 text-lg">
            Desde pequeno fui uma criança bastante curiosa e fascinada <br />
            por tecnologia por influência dos games que eu jogava na época{" "}
            <br />e foi a partir dai que eu tive o despertar de pesquisar como
            tudo <br />
            naquela área funcionava e com isso eu conheci o imenso universo{" "}
            <br />
            da programação. Todos os meus conhecimentos aprendidos foi graças{" "}
            <br />
            ao curso de programação dado pela instituição Programadores do
            Amanhã
            <br />E atualmente busco o meu primeiro emprego na área. <br />
          </p>
        </div>
      </div>
    </>
  );
}
