import { NavLink } from "react-router-dom";
import Text from "../components/text";
import Container from "../components/container";

export default function Footer() {
    return (
        <Container>


            <footer className="my-5rem md:my-10rem">
                <nav className="flex items-center justify-center gap-[1rem]">
                    <NavLink to="/">
                        <Text variant="body-sm-bold" className="primary">
                            Home
                        </Text>
                    </NavLink>
                    <NavLink to="/componentes">
                        <Text variant="body-sm-bold" className="primary">
                            Componentes
                        </Text>
                    </NavLink>
                    <NavLink to="/login">
                        <Text variant="body-sm-bold" className="primary">
                            login
                        </Text>
                    </NavLink>
                    <NavLink to="/fistLogin">
                        <Text variant="body-sm-bold" className="primary">
                            primeiroLogin
                        </Text>
                    </NavLink>
                </nav>
            </footer>
        </Container>
    );
}