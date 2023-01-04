import "./Form.css";
import TextField from "../TextField";
import DropDown from "../DropDown";
import SubmitButton from "../SubmitButton";

const Form = () => {
  const teams = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="form">
      <form>
        <h2>Preencha os Dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropDown itens={teams} label="Time" />
        <SubmitButton> 
          Criar Card
        </SubmitButton>
      </form>
    </section>
  );
};

export default Form;
