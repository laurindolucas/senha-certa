import Card from "./components/card";
import "./index.css";
import Text from "./components/text";
import Container from "./components/container";
import Icon from "./components/icon";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import PencilIcon from "./assets/icons/PencilSimple-Regular.svg?react";
import ButtonIcon from "./components/button-icon";
import Button from "./components/button";
function App() {
  return (
    <Container>
      <Card size="md" className="w-[90%] h-auto flex items-center justify-center ">
    
      </Card>

        <Button className="w-[90%] pt-[1rem]">
          <ButtonIcon icon={PlusIcon} variant="primary" />
          <Text>Nova Senha</Text>
        </Button>

    </Container>
  );
}

export default App