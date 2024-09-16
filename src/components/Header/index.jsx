import Button from "../Button"
import Li from "../Li"

export default function Header() {
    return (
        <>
            <div className="flex justify-around items-center h-32 bg-erie_black text-white">
                <div>
                    <h1 className="text-xl">Portfólio</h1>
                </div>
                <div>
                    <ul className="flex">
                        <Li text="Sobre mim"/>
                        <Li text="Projetos"/>
                        <Li text="Conhecimentos"/>
                    </ul>
                </div>
                <div>
                    <Button text="Contatos"/>
                </div>
            </div>
        </>
    )
}