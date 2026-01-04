import Card from "../components/card";
import "../index.css";
import Text from "../components/text";
import Container from "../components/container";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react";
import PencilIcon from "../assets/icons/PencilSimple-Regular.svg?react";
import ButtonIcon from "../components/button-icon";
import Button from "../components/button";
import InputText from "../components/input-text";

export default function PageComponents() {
  return (
    <Container>

      <Card size="md" className="w-[100%] h-auto flex-col items-center justify-center ">

        <Button className="w-[90%] pt-[1rem]">
          <ButtonIcon icon={PlusIcon} variant="primary" />
          <Text>Nova Senha</Text>
        </Button>

        <Button className="w-[90%] pt-[1rem]" variant="secondary">
          <ButtonIcon icon={PlusIcon} variant="primary" />
          <Text>Nova Senha</Text>
        </Button>

        <InputText/>

        <ButtonIcon icon={PencilIcon} variant="primary" />
        <ButtonIcon icon={TrashIcon} variant="primary" />
      </Card>
    </Container>
  );
}

