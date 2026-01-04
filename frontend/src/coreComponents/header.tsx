import Container from "../components/container";
import Logo from "../assets/images/Logo3.svg?react"

export default function Header(){
    return(
        <Container as="header" className="mt-[1rem] md:mt-[20rem]">
            <Logo className="h-[10rem] md:h-[12rem]"/>
        </Container>
    )
}