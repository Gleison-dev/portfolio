import css from "../../assets/css.png";
import html5 from "../../assets/html5.png";
import js from "../../assets/js.png";
import mySQL from "../../assets/mySQL.svg";
import node from "../../assets/node.js.svg";
import python from "../../assets/python.svg";
import react from "../../assets/react.svg";
import sequelize from "../../assets/sequelize.svg";
import express from "../../assets/express.svg";
import Icons from "../Icons";

export default function Knowledge() {
  return (
    <>
      <div className="flex justify-center mt-40">
        <h1 className="text-3xl text-white border-b-2 border-olivine">
          Conhecimentos
        </h1>
      </div>
      <div className="flex justify-around mt-20 bg-mindaro p-14">
        <Icons image={html5} alt="Ícone do HTML" />
        <Icons image={css} alt="Ícone do CSS" />
        <Icons image={js} alt="Ícone do JavaScript" />
        <Icons image={mySQL} alt="Ícone do MySQL" />
        <Icons image={node} alt="Ícone do Node.js" />
        <Icons image={express} alt="Ícone do Sequelize" />
        <Icons image={sequelize} alt="Ícone do Sequelize" />
        <Icons image={react} alt="Ícone do React" />
        <Icons image={python} alt="Ícone do Python" />
      </div>
    </>
  );
}
