import { Input } from "../../Form/Input";
import { Select } from "../../Form/Select";
import { SubmitButton } from "../../Form/SubmitButton";
import styles from "./ProjectForm.module.css";

export const ProjectForm = ({ btnText }) => {
  return (
    <form action="" className={styles.form}>
      <Input
        type="text"
        text="Nome do Porjeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do Porjeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton text={btnText} />
    </form>
  );
};
