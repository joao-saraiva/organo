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

  const afterSave = (event) => {
    event.preventDefault();
    console.log("form was submited")
  }

  return (
    <section className="form">
      <form onSubmit={afterSave}>
        <h2>Preencha os Dados para criar o card do colaborador</h2>
        <TextField required={true} label="Nome" placeholder="Digite seu nome" />
        <TextField required={true} label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropDown required={true} itens={teams} label="Time" />
        <SubmitButton> 
          Criar Card
        </SubmitButton>
      </form>
    </section>
  );
};

export default Form;
